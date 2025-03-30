import React from "react";

interface PageWrapperProps { 
  children: React.ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div
      style={{ height: "calc(100vh - 200px)" }}
      className="text-todo-gray-100  max-w-[736px] mx-auto"
    >
      {children}
    </div>
  );
};

export default PageWrapper;
