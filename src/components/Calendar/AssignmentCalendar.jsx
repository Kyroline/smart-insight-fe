import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const AssignmentCalendar = ({ assignments, initialMonth, initialYear, onYearChange, onMonthChange }) => {
    const [month, setMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)
    const dayName = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB']
    const monthName = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI",
        "JULY", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"
    ];

    const check = (array, hari, bulan) => {
        for (var i = 0; i < array.length; i++) {
            var tanggal = new Date(array[i].deadline).getDate();
            var bulanObjek = new Date(array[i].deadline).getMonth() + 1;
            if (tanggal === hari && bulanObjek === bulan) {
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        if (typeof onMonthChange === 'function')
            onMonthChange(month)
    }, [month])

    useEffect(() => {
        if (typeof onYearChange === 'function')
            onYearChange(year)
    }, [year])

    const getFirstDay = (month, year) => {
        if (month < 3) {
            month += 12;
            year--;
        }

        const K = year % 100;
        const J = Math.floor(year / 100);
        const h = (1 + Math.floor((13 * (month + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;

        switch (h) {
            case 0:
                return 6;
            case 1:
                return 0;
            case 2:
                return 1;
            case 3:
                return 2;
            case 4:
                return 3;
            case 5:
                return 4;
            case 6:
                return 5;
            default:
                return -1;
        }
    }

    function getDaysInMonth(month, year) {
        if (month === 2) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
                return 29
            else
                return 28;
        } else if ([1, 3, 5, 7, 8, 10, 12].includes(month))
            return 31
        else
            return 30
    }

    const [days, setDays] = useState([[], [], [], [], []])

    const onPrevPressed = () => {
        if (month == 1) {
            setMonth(12)
            setYear(prev => prev - 1)
        } else {
            setMonth(prev => prev - 1)
        }
    }

    const onNextPressed = () => {
        if (month == 12) {
            setMonth(1)
            setYear(prev => prev + 1)
        } else {
            setMonth(prev => prev + 1)
        }
    }

    useEffect(() => {
        let firstDay = getFirstDay(month, year)
        let totalDays = getDaysInMonth(month, year)
        let tempDays = [[], [], [], [], []]

        let nowDays = 1;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 7; j++) {
                if (nowDays > totalDays)
                    break
                if ((i * 7) + j + 1 < firstDay + 1) {
                    tempDays[i] = [...tempDays[i], -1]
                    continue
                }
                tempDays[i] = [...tempDays[i], nowDays < 10 ? '0' + nowDays : nowDays]
                nowDays += 1
            }
        }
        setDays(tempDays)
    }, [month, year])

    const renderDateItem = () => {
        let countDate = 0;
        return days.map((week, wIndex) => {
            return week.map((day, dIndex) => {
                if (day != -1)
                    countDate += 1
                return <div key={dIndex} className={`text-sm md:text-base ${check(assignments, countDate, month) ? 'bg-blue-500 text-white' : ''} row-span-1 col-span-1 font-inter font-semibold flex justify-center p-2 text-slate-600 ${day != -1 ? 'hover:bg-blue-600 hover:text-white' : ''} `}>{day != -1 ? day : ''}</div>
            })
        })
    }

    return (
        <div className="max-w-[30rem] min-h-10 bg-white p-2 m-4 flex-col items-center justify-center">
            <div className="flex flex-row justify-between items-center p-2">
                <div className="hover:bg-gray-500 p-2 rounded-full" onClick={onPrevPressed}><BsChevronLeft /></div>
                <div className="text-lg font-semibold">{monthName[month - 1]} {year}</div>
                <div className="hover:bg-gray-500 p-2 rounded-full" onClick={onNextPressed}><BsChevronRight /></div>
            </div>
            <div className="grid grid-cols-7 grid-rows-5">
                {dayName.map((dayN, index) => <div key={index} className="text-sm md:text-base row-span-1 col-span-1 font-inter font-semibold flex justify-center p-2 text-slate-800">{dayN}</div>)}
                {renderDateItem()}
            </div>
        </div>
    )
}

export default AssignmentCalendar