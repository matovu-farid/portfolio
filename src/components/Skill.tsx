import { NavLink } from "react-router-dom";
import { Attribute } from "../interfaces/attribute";

import SkillsOptions from "./SkillsOptions";
interface Props {
  attribute: Attribute;
  className?: string;
}

const Attribute = ({ attribute, className }: Props) => {
  return (
    <div className={`flex flex-col border-2 shadow-lg rounded-lg ${className}`}>
      <NavLink to={`/attributes/${attribute.id}`}>
        <div>
          <div className="p-2">
            <h3 className="h-3 text-2xl text-gray-900 font-bold">
              {" "}
              {attribute.name}
            </h3>
          </div>
          <div className="p-2">
            <img
              className=" object-contain h-96"
              src={attribute.image}
              alt={attribute.name}
            />
          </div>
          <div className="p-2"></div>
        </div>
      </NavLink>
      <div className="my-auto p-3">
        <SkillsOptions attribute={attribute}></SkillsOptions>
      </div>
    </div>
  );
};

export default Attribute;
