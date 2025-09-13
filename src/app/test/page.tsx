"use client";
import Button from "@/components/luicomponents/button";

function doNothing() {

}

export default function Test() {
    return (
        <div className="bg-white flex flex-col items-center justify-center">
            <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-center items-center bg-white">
                <Button label="Button" onClick={() => doNothing}/>
            </div>
        </div>
    )
}
