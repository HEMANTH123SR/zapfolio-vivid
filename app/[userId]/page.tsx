import React from "react";
import { UserDetailedObjectType } from "@/lib/types";
import { UserComponent } from "@/components/sections/UserSection"
const Vivid = async ({ params }: { params: { userId: string } }) => {
    const userDataResponse = await fetch(
        `https://www.zapfolio.in/api/get-user-data?userId=${params.userId}`
    );

    const userData = await userDataResponse.json();

    if (userData.success) {
        const {
            linkedinUserData: user,
        }: { linkedinUserData: UserDetailedObjectType } = userData.data;
        return (
            <UserComponent user={user} />
        )
    }
    return (
        <main className="flex flex-col w-screen h-screen bg-white justify-center items-center">
            <h1 className="text-6xl font-semibold">404</h1>
            <span className="text-xs font-semibold font-sans">
                something went wrong
            </span>
        </main>
    );
}

export default Vivid;