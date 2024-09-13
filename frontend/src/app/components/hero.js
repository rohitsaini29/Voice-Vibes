import { useRouter } from 'next/navigation'

export default function Hero() {
    const router = useRouter()
    return (
        <div className="hero  flex-col w-full p-6 ">
            <div className="hero-content flex-col lg:flex-row-reverse space-x-2">
                <div className="p-4"><img src="detect2.png" className="max-w-sm rounded-lg shadow-2xl " /></div>
                <div bg bg-slate-400 rounded-lg>
                    <div className="flex flex-col space-y-10  lg:w-1/2 ">
                        <h1
                            className="text-4xl font-bold text-center md:text-6xl lg:max-w-1/2 lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-teal-100 "
                        >
                            <span className=" bg-gradient-to-r from-green-700 via-green-400 to-green-100 text-transparent bg-clip-text font-sans">Beyond Words, Beyond Tones</span>

                        </h1>
                        <p
                            className="text-3xl font-semibold text-center text-white font-sans lg:max-w-lg lg:text-left"
                        >
                            Decoding Emotions in Every Utterance.                        </p>
                        <button className="btn btn-primary font-mono rounded-3xl hover:bg-black-100 hover:text-white font-extrabold " onClick={() => router.push('/recognise/record')}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}