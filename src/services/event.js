import { getDummyJsonUsers } from ".";
import _ from "lodash";
import { setJsonData } from "../redux/slices/toDoList";

export const handleFetchUsers = () => async (dispatch) => {
  const response = await dispatch(getDummyJsonUsers());
  const users = _.get(response, "payload.data.users", []);
  const result = _.groupBy(users, "company.department");
  _.map(_.defaultTo(result, []), (item, index) => {
    let genderValue = {};
    _(item)
      .groupBy("gender")
      .map((item, gender) => {
        genderValue = {
          ...genderValue,
          [gender]: item.length,
        };

        return {
          [gender]: item.length,
        };
      })
      .value();

    const minAge = _.minBy(item, "age").age;
    const maxAge = _.maxBy(item, "age").age;
    const ageRange = `${minAge}-${maxAge}`;
    let hairValue = {};
    _(item)
      .groupBy("hair.color")
      .map((item, hair) => {
        hairValue = {
          ...hairValue,
          [hair]: item.length,
        };

        return { [hair]: item.length };
      })
      .value();

    let addressUser = {};
    _(item)
      .groupBy("address.postalCode")
      .map((e, postalCode) => {
        addressUser = {
          ...addressUser,
          [e[0].firstName + e[0].lastName]: postalCode,
        };

        return { [e[0].firstName + e[0].lastName]: postalCode };
      })
      .value();
    result[index] = {
      male: _.get(genderValue, "male", 0),
      female: _.get(genderValue, "female", 0),
      ageRange,
      hair: hairValue,
      addressUser,
    };
  });
  dispatch(setJsonData({ value: result }));
};
