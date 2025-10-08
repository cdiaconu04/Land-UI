"use client";
import Button from "@/components/luicomponents/button";
import Input from "@/components/luicomponents/input";

function doNothing() {

}

export default function Test() {
    return (
        <div className="bg-white flex flex-col items-center justify-center">
            <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-col gap-5 justify-center items-center bg-white">
                <Button label="Button" hoverShadow={true} onClick={() => doNothing}/>

                <Input />
            </div>
        </div>
    )
}
