import { Button } from "flowbite-react";
import { FC, useState, useRef, useEffect } from "react";

interface NotificationCardProps {
    notificationTitle: string;
    notificationDetails: string;
    processId: string;
}


const NotificationCard: FC<NotificationCardProps> = ({ notificationTitle, notificationDetails, processId }) => {
    function onDetailsButton() {
        console.log("HolaMundo")
    }

    return <>
        <div className="NotificationCard flex justify-between items-center border-solid border p-2 rounded-md  hover:bg-blue-200 cursor-pointer" onClick={onDetailsButton}>
            <div className="CardInfo flex flex-col">
                <p className="text-xl font-medium"> {notificationTitle}</p>
                <p className="text-xs font-normal"> {notificationDetails}</p>
            </div>
            <div className="MoreDetailButton text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </div>

    </>
}



export const NotificationsPopOver: FC = () => {
    const popoverRef = useRef(null);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [notificationList, setNotificationList] = useState<NotificationCardProps[]>([]);


    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleClickOutside = (event: { target: any; }) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setPopoverOpen(false);
            }
        };

        // Agregar el event listener al documento
        document.addEventListener('mousedown', handleClickOutside);

        // Limpiar el event listener al desmontar el componente
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={popoverRef}>
            <div className="NotificationIcon hover:brightness-110" onClick={() => setPopoverOpen(!popoverOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

                {notificationList.length > 0 && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                        {notificationList.length}
                    </div>
                )}

            </div>
            {popoverOpen && (
                <div className="absolute top-full right-0 mt-3 w-80 bg-white border-gray-300 p-4 rounded-md shadow-lg z-10">
                    <div className="PopOverContent text-black">
                        <p className="text-2xl pb-4">Notificaciones</p>
                        <div className="flex flex-col space-y-2 pb-4">


                        {notificationList.length == 0 && (
                            <div className="flex justify-center p-4 font-thin text-xl ">
                                 Sin notificationes
                            </div>
                        )}


                            {notificationList.map((index) => (
                                <li key={index.processId} className="ToolCategory ml-4">
                                    <NotificationCard notificationTitle={index.notificationTitle} notificationDetails={index.notificationDetails} processId={index.processId} ></NotificationCard>
                                </li>
                            ))}

                        </div>
                        <div className="flex flex-row justify-end space-x-4">
                            <Button size="xs" color="blue">Limpiar</Button>
                            <Button size="xs" color="blue">Ir a notificaciones</Button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};
