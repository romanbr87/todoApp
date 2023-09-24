export type Status =
  | "Potential"
  | "New"
  | "NotActual"
  | "InProgress"
  | "Active"
  | "BlackList"
  | "Delete"
  | "Test";

  
  export type OrderStatus =
  | "New"
  | "Active"
  | "Finished"
  | "Canceled"
  | "Delete"
  | "Test"
  | "InProgress";
  
  export type SupType =
    | "VAT_Bis"
    | "Licensed_Bis"
    | "Company_LTD"
    | "NPO"
    | "GovOrg";
  
export type ClientType = | "Person" | SupType;

  type Categories = {
    [key: string]: string[];
  };
  
  export const Categories: Categories = {
  BodyMind: ["Yoga", "QiGong", "Tai Chi"],
  ActiveLeisure: ["Bouldering"],
  Outdoor: ["Hiking"],
};
