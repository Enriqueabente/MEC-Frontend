import { Dropdown } from "flowbite-react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

/* COMPONENTES RELACIONADOS A LA SECCION DE DROPDOWNS ESPECIFICOS A CADA MODULO */
interface ModuleDropdownItem {
    title: string;
    path: string;
}

export interface ModuleDropdownProps {
    dropdownTitle: string;
    dropdownItems: ModuleDropdownItem[];
}

const ModuleDropdown: React.FC<ModuleDropdownProps> = ({ dropdownTitle, dropdownItems }) => {
    return (
        <Dropdown className="bg-red-600 text-white border-red-600 shadow-sm  " label="" dismissOnClick={true} renderTrigger={() =>
            <div className="flex flex-1 justify-start items-center flex-shrink-0">
                <p className="inline-block">{dropdownTitle}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        }>
            {dropdownItems.map((item, index) => (
                <NavLink to={item.path} key={`${index}-${item.path}`} >
                <Dropdown.Item key={index} className="bg-red-600 text-white hover:text-black">{item.title}</Dropdown.Item>

                </NavLink>
            ))}
        </Dropdown>
    );
}

interface ModuleDropdownsSectionProps {
    dropdowns: ModuleDropdownProps[]; // Cambia el tipo de dato según lo que estés manejando en tu lista de dropdowns
}

const ModuleDropdownsSection: FC<ModuleDropdownsSectionProps> = ({ dropdowns }) => {
    return (
        <>
            <ul className="ModuleTool flex ml-10">
                {dropdowns.map((index) => (
                    <li key={index.dropdownTitle} className="ToolCategory ml-4">
                        <ModuleDropdown dropdownTitle={index.dropdownTitle} dropdownItems={index.dropdownItems}></ModuleDropdown>
                    </li>
                ))}
            </ul>
        </>
    );
}



export {ModuleDropdownsSection}