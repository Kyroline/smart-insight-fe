import React from 'react'

const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-4">
                <img className='max-w-48 md:max-w-96' src="/media/image/logo.png" alt="" />
                <img className='max-w-48 md:max-w-96' src="/media/image/logo-text.png" alt="" />
            </div>
            <div className="flex p-2 md:p-4 bg-white shadow-md rounded-md mb-2">
                <p>Web ini dirancang untuk menjadi platform pembelajaran yang komprehensif, menghadirkan berbagai fitur penting untuk mendukung proses belajar mengajar. Fitur-fitur utama yang ditawarkan meliputi:</p>
            </div>
            <div className="grid gap-4 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
                <div className="p-2 md:p-4 bg-white shadow-md rounded-md">
                    <h1 className='font-bold mb-2'>Kehadiran</h1>
                    <p>Melacak kehadiran siswa secara real-time, memungkinkan guru untuk memantau partisipasi siswa dalam kelas.</p>
                </div>
                <div className="p-2 md:p-4 bg-white shadow-md rounded-md">
                    <h1 className='font-bold mb-2'>Materi</h1>
                    <p>Menyediakan ruang penyimpanan untuk materi pelajaran, termasuk dokumen, video, dan presentasi. Guru dapat dengan mudah membagikan materi kepada siswa dan memastikan semua orang memiliki akses ke informasi yang sama.</p>
                </div>
                <div className="p-2 md:p-4 bg-white shadow-md rounded-md">
                    <h1 className='font-bold mb-2'>Tugas</h1>
                    <p>Memberikan platform untuk memberikan dan mengumpulkan tugas, lengkap dengan sistem penilaian otomatis untuk menghemat waktu guru. Siswa dapat mengerjakan tugas secara online dan melacak kemajuan mereka.</p>
                </div>
                <div className="p-2 md:p-4 bg-white shadow-md rounded-md">
                    <h1 className='font-bold mb-2'>Diskusi</h1>
                    <p>Memfasilitasi diskusi online antara guru dan siswa, memungkinkan mereka untuk bertukar ide, mengajukan pertanyaan, dan memberikan klarifikasi. Forum diskusi dapat diakses kapan saja, mendorong pembelajaran yang berkelanjutan di luar jam kelas.</p>
                </div>
            </div>
        </>
    )
}

export default Home