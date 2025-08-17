export const Spinner = ({opacity = '0.5'}) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})`, borderRadius: 'inh' }}
        >
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-4 border-emerald-400 border-b-transparent rounded-full animate-spin-reverse"></div>
            </div>

        </div>
    )
}
