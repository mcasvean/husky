import { createContext, useContext } from "react";

interface StudentContext {
  speciality: string;
  city: string;
  year: number;
  addData: () => void;
  removeData: () => void;
};

const StudentContext = createContext<StudentContext | undefined>(undefined);

export function StudentProvider({ children }: { children: React.ReactNode }) {
  const context: StudentContext = {
    speciality: "Programming",
    city: "Cluj-Napoca",
    year: 2026,
    addData: () => {
      localStorage.setItem("data", "2026");
    },
    removeData: () => {
      localStorage.removeItem("data");
    },
  };

  return (
    <StudentContext.Provider value={context}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error("useStudent must be inside StudentProvider");
  }

  return context;
}
