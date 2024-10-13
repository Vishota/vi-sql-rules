export default SqlRules;
type SqlRules = {
    create: CreateSqler;
    read: ReadSqler;
    update: UpdateSqler;
    delete: DeleteSqler;
};
type CreateSqler = (fieldData: CreateFieldData) => string;
type ReadSqler = (fieldData: ReadFieldData) => string;
type UpdateSqler = (updateData: UpdateData) => string;
type DeleteSqler = (deleteData: DeleteData) => string;
type CreateFieldData = {
    valuesFields: string[];
    tableName: string;
};
type ReadFieldData = {
    whereFields: string[];
    tableName: string;
};
type UpdateData = {
    tableName: string;
    setFields: string[];
    whereFields: string[];
};
type DeleteData = {
    tableName: string;
    whereFields: string[];
};
