"use client"

export default function Error({ error, reset }: any) {
    return (
        <div>
            This ain't loading up: {error.message}
            <button onClick={() => reset()}>Reload</button>
        </div>
    )
}   