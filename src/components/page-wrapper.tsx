import React from "react";

interface PageWrapperProps { 
  children: React.ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div
      style={{ height: "calc(100vh - 200px)" }}
      className="bg-todo-gray-600 text-todo-gray-100"
    >
      {children}
    </div>
  );
};

export default PageWrapper;
