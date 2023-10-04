import { useQuery } from "react-query";
import { allList, concernList, freetalkList } from "../apis/pettalkApi";

export const useAllList = (selectedPet: string) => {
  return useQuery("allList", () => allList(selectedPet));
};

export const useConcernList = (
  selectedPet: string,
  mainCategory: number,
  subCategory: number
) => {
  return useQuery("concernList", () =>
    concernList(selectedPet, mainCategory, subCategory)
  );
};

export const useFreetalkList = (selectedPet: string, mainCategory: number) => {
  return useQuery("allLisfreetalkListt", () =>
    freetalkList(selectedPet, mainCategory)
  );
};
