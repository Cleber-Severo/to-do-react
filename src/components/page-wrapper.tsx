import React from "react";

interface PageWrapperProps { 
  children: React.ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="bg-todo-gray-600">
      {children}
    </div>
  );
};

export default PageWrapper;
