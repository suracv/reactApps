// import { createContext, useContext, useState } from "react";
// import { UseModals } from "hooks/useModals";
// import { useToast } from "hooks/useToast";
// import { IUser } from "interfaces/interfaces";

// export const MainContext = createContext<IAppContext>({} as any);
// export const useAppContext = () => useContext(MainContext);

// export const AppContext = (props: Props) => {
//   const { children } = props;
//   const [user, setUser] = useState<IUser>({} as any);

//   const {
//     registerModalVisible,
//     setRegisterModalVisible,
//     mailVerificationModalVisible,
//     setMailVerificationModalVisible,
//     loginModalVisible,
//     setLoginModalVisible,
//   } = UseModals();

//   const {
//     showErrorNotification,
//     showInfoNotification,
//     showSuccessNotification,
//     showWarningNotification,
//   } = useToast();

//   return (
//     <MainContext.Provider
//       value={{
//         modals: {
//           registerModalVisible,
//           setRegisterModalVisible,
//           mailVerificationModalVisible,
//           setMailVerificationModalVisible,
//           loginModalVisible,
//           setLoginModalVisible,
//         },
//         toasts: {
//           showErrorNotification,
//           showInfoNotification,
//           showSuccessNotification,
//           showWarningNotification,
//         },
//         auth: {
//           user,
//           setUser,
//         },
//       }}
//     >
//       {children}
//     </MainContext.Provider>
//   );
// };

// interface IAppContext {
//   modals: {
//     registerModalVisible: boolean;
//     setRegisterModalVisible: (_val: boolean) => void;
//     mailVerificationModalVisible: boolean;
//     setMailVerificationModalVisible: (_val: boolean) => void;
//     loginModalVisible: boolean;
//     setLoginModalVisible: (_val: boolean) => void;
//   };
//   toasts: {
//     showErrorNotification: (title: string) => void;
//     showInfoNotification: (title: string) => void;
//     showSuccessNotification: (title: string) => void;
//     showWarningNotification: (title: string) => void;
//   };

//   auth: {
//     user: {
//       roles: string[];
//       userRole: string[];
//       accessToken: string;
//     };
//     setUser: (user: IUser) => void;
//   };
// }

// interface Props {
//   children: React.ReactNode;
// }
