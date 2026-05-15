import CodeBlock from "@/components/codeBlock";

export default function Installation() {
    return (
        <div className="bg-white grid grid-cols-5 gap-8 justify-between w-full">
            <div className="col-span-4 flex flex-col gap-10 min-w-full items-start justify-top">
                <div className="flex flex-col gap-2 w-full">
                    <p className="text-3xl text-gray-800"> Installation </p>
                    <p className="text-lg text-gray-800"> Get started by installing LandUI in your project. </p>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <p className="text-2xl text-gray-800"> Install </p>
                    <p className="text-lg text-gray-800"> Run the following command in your React or Next.js project directory. </p>
                    <CodeBlock code={`npm install @cdiaconu/land-ui`} />
                </div>
            </div>
        </div>
    );
}
