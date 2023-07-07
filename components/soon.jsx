import Image from "next/image";

const ComingSoon = () => {
    return(
        <main>
            <div className="relative h-screen bg-gray-100">
                {/* Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-900 font-sans text-center">
                <h3 className="text-lg sm:text-2xl">Coming Soon</h3>
                <h2 className="text-4xl sm:text-6xl p-4 font-bold drop-shadow-md">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/Lgo.png?alt=media&token=f85ee00a-ed5a-46a9-a5e4-3238a6e107ed"
                        alt="AS247 Security"
                        width={200}
                        height={200}
                    />
                </h2>
                <div className="p-4">
                    <p className="text-xs sm:text-sm">Our new website will be live soon!<br/>Get in touch with us on WhatsApp or give us a call on 064 572 2714</p>
                </div>
            </div>
            </div>
        </main>
    )
}

export default ComingSoon