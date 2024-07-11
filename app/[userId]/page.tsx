"use client";
import React, { useState, useEffect } from "react";
import { UserDetailedObjectType, ComponentsToShowType } from "@/lib/types";
import { UserComponent } from "@/components/sections/user-section";
const Vivid = ({ params }: { params: { userId: string } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserDetailedObjectType | null>(null);
  const [componentsToShow, setComponentsToShow] =
    useState<ComponentsToShowType>({
      summary: true,
      headline: true,
      geo: true,
      languages: true,
      educations: true,
      position: true,
      skills: true,
      courses: true,
      certifications: true,
      projects: true,
      resume: true,
    });

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const userDataResponse = await fetch(`/api?id=${params.userId}`,
        { cache: "no-store" });
      const userData = await userDataResponse.json();

      if (userData.success) {
        setUser(userData.data.linkedinUserData);
        setComponentsToShow(userData.data.themesData.vivid.componentsToShow);
      }
      setIsLoading(false);
    })();
  }, [params.userId]);

  if (!isLoading) {
    if (user) {
      return <UserComponent user={user} componentsToShow={componentsToShow} />;
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
  return (
    <main className="flex flex-col w-screen h-screen bg-white justify-center items-center">
      <span className="text-xs font-semibold font-sans">loading</span>
    </main>
  );
};

export default Vivid;
