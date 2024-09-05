import store from "./../store";

//#region Educational
export const hasEducational = () => {
  return (
    hasEducationalPeriod() ||
    hasEducationalCategory() ||
    hasEducationalRating() ||
    hasPriceList() ||
    hasEducationalJoiningApplication()
  );
};

//#region EducationalPeriods
export const hasEducationalPeriod = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalPeriod.view;
  } catch (error) {
    return false;
  }
};
export const hasEducationalPeriodViewActive = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.viewActive;
};
export const hasEducationalPeriodViewArchive = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.viewArchived;
};
export const hasEducationalPeriodViewBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.viewBlocked;
};

export const hasEducationalPeriodAdd = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.itemAdd;
};
export const hasEducationalPeriodEdit = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.itemUpdate;
};

export const hasEducationalPeriodDeleteImage = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.itemDeleteImage;
};
export const hasEducationalPeriodFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.itemFinaleDelete;
};

export const hasEducationalPeriodChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod
    .changeActivationType;
};
export const hasEducationalPeriodActive = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.itemActive;
};
export const hasEducationalPeriodArchive = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.itemArchive;
};
export const hasEducationalPeriodBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalPeriod.itemBlocked;
};
//#endregion EducationalPeriods

//#region EducationalRatings
export const hasEducationalRating = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalRating.view;
  } catch (error) {
    return false;
  }
};
export const hasEducationalRatingViewActive = () => {
  return store.getters.usersPrivilegeData.EducationalRating.viewActive;
};
export const hasEducationalRatingViewArchive = () => {
  return store.getters.usersPrivilegeData.EducationalRating.viewArchived;
};
export const hasEducationalRatingViewBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalRating.viewBlocked;
};

export const hasEducationalRatingAdd = () => {
  return store.getters.usersPrivilegeData.EducationalRating.itemAdd;
};
export const hasEducationalRatingEdit = () => {
  return store.getters.usersPrivilegeData.EducationalRating.itemUpdate;
};

export const hasEducationalRatingDeleteImage = () => {
  return store.getters.usersPrivilegeData.EducationalRating.itemDeleteImage;
};
export const hasEducationalRatingFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EducationalRating.itemFinaleDelete;
};

export const hasEducationalRatingChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EducationalRating
    .changeActivationType;
};
export const hasEducationalRatingActive = () => {
  return store.getters.usersPrivilegeData.EducationalRating.itemActive;
};
export const hasEducationalRatingArchive = () => {
  return store.getters.usersPrivilegeData.EducationalRating.itemArchive;
};
export const hasEducationalRatingBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalRating.itemBlocked;
};
//#endregion EducationalRatings

//#region EducationalCategories
export const hasEducationalCategory = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalCategory.view;
  } catch (error) {
    return false;
  }
};
export const hasEducationalCategoryViewActive = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.viewActive;
};
export const hasEducationalCategoryViewArchive = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.viewArchived;
};
export const hasEducationalCategoryViewBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.viewBlocked;
};

export const hasEducationalCategoryAdd = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.itemAdd;
};
export const hasEducationalCategoryEdit = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.itemUpdate;
};

export const hasEducationalCategoryDeleteImage = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.itemDeleteImage;
};
export const hasEducationalCategoryFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.itemFinaleDelete;
};

export const hasEducationalCategoryChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EducationalCategory
    .changeActivationType;
};
export const hasEducationalCategoryActive = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.itemActive;
};
export const hasEducationalCategoryArchive = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.itemArchive;
};
export const hasEducationalCategoryBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalCategory.itemBlocked;
};
//#endregion EducationalCategories

//#region EducationalJoiningApplications
export const hasEducationalJoiningApplication = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalJoiningApplication.view;
  } catch (error) {
    return false;
  }
};
export const hasEducationalJoiningApplicationReport = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalJoiningApplication
      .viewReport;
  } catch (error) {
    return false;
  }
};
export const hasEducationalJoiningApplicationViewActive = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .viewActive;
};
export const hasEducationalJoiningApplicationViewArchive = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .viewArchived;
};
export const hasEducationalJoiningApplicationViewBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .viewBlocked;
};

export const hasEducationalJoiningApplicationAdd = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication.itemAdd;
};
export const hasEducationalJoiningApplicationEdit = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .itemUpdate;
};

export const hasEducationalJoiningApplicationDeleteImage = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .itemDeleteImage;
};
export const hasEducationalJoiningApplicationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .itemFinaleDelete;
};

export const hasEducationalJoiningApplicationChangeApprove = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .changeApproveApplications;
};
export const hasEducationalJoiningApplicationActive = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .itemActive;
};
export const hasEducationalJoiningApplicationArchive = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .itemArchive;
};
export const hasEducationalJoiningApplicationBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalJoiningApplication
    .itemBlocked;
};
//#endregion EducationalJoiningApplications

//#region JoiningApplicationSubscriptions
export const hasJoiningApplicationSubscription = () => {
  try {
    return store.getters.usersPrivilegeData.JoiningApplicationSubscription.view;
  } catch (error) {
    return false;
  }
};

export const hasJoiningApplicationSubscriptionAdd = () => {
  return store.getters.usersPrivilegeData.JoiningApplicationSubscription
    .itemAdd;
};
export const hasJoiningApplicationSubscriptionDeleteImage = () => {
  return store.getters.usersPrivilegeData.JoiningApplicationSubscription
    .itemDeleteImage;
};
//#endregion JoiningApplicationSubscriptions

//#endregion Educational

//#region Groups
export const hasGroup = () => {
  return (
    hasEducationalGroup() ||
    hasEducationalScheduleTime() ||
    hasEducationalGroupStudent() ||
    hasEducationalGroupTransfer() ||
    hasEducationalGroupAttendance()
  );
};

//#region EducationalGroups
export const hasEducationalGroup = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalGroup.view;
  } catch (error) {
    return false;
  }
};
export const hasEducationalGroupViewActive = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.viewActive;
};
export const hasEducationalGroupViewArchive = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.viewArchived;
};
export const hasEducationalGroupViewBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.viewBlocked;
};

export const hasEducationalGroupAdd = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.itemAdd;
};
export const hasEducationalGroupEdit = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.itemUpdate;
};

export const hasEducationalGroupDeleteImage = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.itemDeleteImage;
};
export const hasEducationalGroupFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.itemFinaleDelete;
};

export const hasEducationalGroupChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.changeActivationType;
};
export const hasEducationalGroupActive = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.itemActive;
};
export const hasEducationalGroupArchive = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.itemArchive;
};
export const hasEducationalGroupBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalGroup.itemBlocked;
};
//#endregion EducationalGroups

//#region EducationalGroupAttendances
export const hasEducationalGroupAttendance = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalGroupAttendance.view;
  } catch (error) {
    return false;
  }
};

export const hasEducationalGroupAttendanceAdd = () => {
  return store.getters.usersPrivilegeData.EducationalGroupAttendance.itemAdd;
};
export const hasEducationalGroupAttendanceEdit = () => {
  return store.getters.usersPrivilegeData.EducationalGroupAttendance.itemUpdate;
};
export const hasEducationalGroupAttendanceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EducationalGroupAttendance
    .itemFinaleDelete;
};
//#endregion EducationalGroupAttendances

//#region EducationalScheduleTimes
export const hasEducationalScheduleTime = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime.view;
};
export const hasEducationalScheduleTimeReport = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalScheduleTime.viewReport;
  } catch (error) {
    return false;
  }
};
export const hasEducationalScheduleTimeViewActive = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime.viewActive;
};
export const hasEducationalScheduleTimeViewArchive = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime.viewArchived;
};
export const hasEducationalScheduleTimeViewBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime.viewBlocked;
};

export const hasEducationalScheduleTimeAdd = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime.itemAdd;
};
export const hasEducationalScheduleTimeEdit = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime.itemUpdate;
};

export const hasEducationalScheduleTimeDeleteImage = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime
    .itemDeleteImage;
};
export const hasEducationalScheduleTimeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime
    .itemFinaleDelete;
};

export const hasEducationalScheduleTimeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime
    .changeActivationType;
};
export const hasEducationalScheduleTimeActive = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime.itemActive;
};
export const hasEducationalScheduleTimeArchive = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime.itemArchive;
};
export const hasEducationalScheduleTimeBlocked = () => {
  return store.getters.usersPrivilegeData.EducationalScheduleTime.itemBlocked;
};
//#endregion EducationalScheduleTimes

//#region EducationalGroupStudents
export const hasEducationalGroupStudent = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalGroupStudent.view;
  } catch (error) {
    return false;
  }
};
export const hasEducationalGroupStudentAdd = () => {
  return store.getters.usersPrivilegeData.EducationalGroupStudent.itemAdd;
};
//#endregion EducationalGroupStudents

//#region EducationalGroupTransfers
export const hasEducationalGroupTransfer = () => {
  try {
    return store.getters.usersPrivilegeData.EducationalGroupTransfer.view;
  } catch (error) {
    return false;
  }
};
export const hasEducationalGroupTransferAdd = () => {
  return store.getters.usersPrivilegeData.EducationalGroupTransfer.itemAdd;
};
//#endregion EducationalGroupTransfers
//#endregion Groups

//#region Exams
export const hasExam = () => {
  return (
    hasSimpleExamModel() ||
    hasGroupScheduleExam() ||
    hasStudentScheduleExamTime()
  );
};

//#region SimpleExamModels
export const hasSimpleExamModel = () => {
  try {
    return store.getters.usersPrivilegeData.SimpleExamModel.view;
  } catch (error) {
    return false;
  }
};
export const hasSimpleExamModelViewActive = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.viewActive;
};
export const hasSimpleExamModelViewArchive = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.viewArchived;
};
export const hasSimpleExamModelViewBlocked = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.viewBlocked;
};

export const hasSimpleExamModelAdd = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.itemAdd;
};
export const hasSimpleExamModelEdit = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.itemUpdate;
};

export const hasSimpleExamModelDeleteImage = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.itemDeleteImage;
};
export const hasSimpleExamModelFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.itemFinaleDelete;
};

export const hasSimpleExamModelChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.changeActivationType;
};
export const hasSimpleExamModelActive = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.itemActive;
};
export const hasSimpleExamModelArchive = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.itemArchive;
};
export const hasSimpleExamModelBlocked = () => {
  return store.getters.usersPrivilegeData.SimpleExamModel.itemBlocked;
};
//#endregion SimpleExamModels

//#region GroupScheduleExams
export const hasGroupScheduleExam = () => {
  try {
    return store.getters.usersPrivilegeData.GroupScheduleExam.view;
  } catch (error) {
    return false;
  }
};
export const hasGroupScheduleExamReport = () => {
  try {
    return store.getters.usersPrivilegeData.GroupScheduleExam.viewReport;
  } catch (error) {
    return false;
  }
};

export const hasGroupScheduleExamAdd = () => {
  return store.getters.usersPrivilegeData.GroupScheduleExam.itemAdd;
};
export const hasGroupScheduleExamEdit = () => {
  return store.getters.usersPrivilegeData.GroupScheduleExam.itemUpdate;
};

export const hasGroupScheduleExamDeleteImage = () => {
  return store.getters.usersPrivilegeData.GroupScheduleExam.itemDeleteImage;
};
export const hasGroupScheduleExamFinaleDelete = () => {
  return store.getters.usersPrivilegeData.GroupScheduleExam.itemFinaleDelete;
};
//#endregion GroupScheduleExams

//#region StudentScheduleExamTimes
export const hasStudentScheduleExamTime = () => {
  try {
    return store.getters.usersPrivilegeData.StudentScheduleExamTime.view;
  } catch (error) {
    return false;
  }
};
export const hasStudentScheduleExamTimeReport = () => {
  try {
    return store.getters.usersPrivilegeData.StudentScheduleExamTime.viewReport;
  } catch (error) {
    return false;
  }
};
//#endregion StudentScheduleExamTimes
//#endregion Exams

//#region ServicesAndCountedServices
export const hasServicesAndCountedServices = () => {
  return (
    hasService() ||
    hasCountedService() ||
    hasServiceType() ||
    hasCountedServiceType()
  );
};

//#region Services
export const hasService = () => {
  try {
    return store.getters.usersPrivilegeData.Service.view;
  } catch (error) {
    return false;
  }
};
export const hasServiceViewActive = () => {
  return store.getters.usersPrivilegeData.Service.viewActive;
};
export const hasServiceViewArchive = () => {
  return store.getters.usersPrivilegeData.Service.viewArchived;
};
export const hasServiceViewBlocked = () => {
  return store.getters.usersPrivilegeData.Service.viewBlocked;
};

export const hasServiceAdd = () => {
  return store.getters.usersPrivilegeData.Service.itemAdd;
};
export const hasServiceEdit = () => {
  return store.getters.usersPrivilegeData.Service.itemUpdate;
};

export const hasServiceDeleteImage = () => {
  return store.getters.usersPrivilegeData.Service.itemDeleteImage;
};
export const hasServiceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Service.itemFinaleDelete;
};

export const hasServiceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Service.changeActivationType;
};
export const hasServiceActive = () => {
  return store.getters.usersPrivilegeData.Service.itemActive;
};
export const hasServiceArchive = () => {
  return store.getters.usersPrivilegeData.Service.itemArchive;
};
export const hasServiceBlocked = () => {
  return store.getters.usersPrivilegeData.Service.itemBlocked;
};
//#endregion Services

//#region CountedServices
export const hasCountedService = () => {
  try {
    return store.getters.usersPrivilegeData.CountedService.view;
  } catch (error) {
    return false;
  }
};
export const hasCountedServiceViewActive = () => {
  return store.getters.usersPrivilegeData.CountedService.viewActive;
};
export const hasCountedServiceViewArchive = () => {
  return store.getters.usersPrivilegeData.CountedService.viewArchived;
};
export const hasCountedServiceViewBlocked = () => {
  return store.getters.usersPrivilegeData.CountedService.viewBlocked;
};

export const hasCountedServiceAdd = () => {
  return store.getters.usersPrivilegeData.CountedService.itemAdd;
};
export const hasCountedServiceEdit = () => {
  return store.getters.usersPrivilegeData.CountedService.itemUpdate;
};

export const hasCountedServiceDeleteImage = () => {
  return store.getters.usersPrivilegeData.CountedService.itemDeleteImage;
};
export const hasCountedServiceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.CountedService.itemFinaleDelete;
};

export const hasCountedServiceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.CountedService.changeActivationType;
};
export const hasCountedServiceActive = () => {
  return store.getters.usersPrivilegeData.CountedService.itemActive;
};
export const hasCountedServiceArchive = () => {
  return store.getters.usersPrivilegeData.CountedService.itemArchive;
};
export const hasCountedServiceBlocked = () => {
  return store.getters.usersPrivilegeData.CountedService.itemBlocked;
};
//#endregion CountedServices

//#region ServiceTypes
export const hasServiceType = () => {
  return store.getters.usersPrivilegeData.ServiceType.view;
};
export const hasServiceTypeViewActive = () => {
  return store.getters.usersPrivilegeData.ServiceType.viewActive;
};
export const hasServiceTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.ServiceType.viewArchived;
};
export const hasServiceTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.ServiceType.viewBlocked;
};

export const hasServiceTypeAdd = () => {
  return store.getters.usersPrivilegeData.ServiceType.itemAdd;
};
export const hasServiceTypeEdit = () => {
  return store.getters.usersPrivilegeData.ServiceType.itemUpdate;
};

export const hasServiceTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.ServiceType.itemDeleteImage;
};
export const hasServiceTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ServiceType.itemFinaleDelete;
};

export const hasServiceTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ServiceType.changeActivationType;
};
export const hasServiceTypeActive = () => {
  return store.getters.usersPrivilegeData.ServiceType.itemActive;
};
export const hasServiceTypeArchive = () => {
  return store.getters.usersPrivilegeData.ServiceType.itemArchive;
};
export const hasServiceTypeBlocked = () => {
  return store.getters.usersPrivilegeData.ServiceType.itemBlocked;
};
//#endregion ServiceTypes

//#region CountedServiceTypes
export const hasCountedServiceType = () => {
  try {
    return store.getters.usersPrivilegeData.CountedServiceType.view;
  } catch (error) {
    return false;
  }
};
export const hasCountedServiceTypeViewActive = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.viewActive;
};
export const hasCountedServiceTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.viewArchived;
};
export const hasCountedServiceTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.viewBlocked;
};

export const hasCountedServiceTypeAdd = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.itemAdd;
};
export const hasCountedServiceTypeEdit = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.itemUpdate;
};

export const hasCountedServiceTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.itemDeleteImage;
};
export const hasCountedServiceTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.itemFinaleDelete;
};

export const hasCountedServiceTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.CountedServiceType
    .changeActivationType;
};
export const hasCountedServiceTypeActive = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.itemActive;
};
export const hasCountedServiceTypeArchive = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.itemArchive;
};
export const hasCountedServiceTypeBlocked = () => {
  return store.getters.usersPrivilegeData.CountedServiceType.itemBlocked;
};
//#endregion CountedServiceTypes

//#endregion ServicesAndCountedServices

//#region Products
export const hasStoreItemsTab = () => {
  return (
    hasStoreItem() ||
    hasPropertyType() ||
    hasDropDownList() ||
    hasSystemComponentStoreItem() ||
    hasSystemComponentsHierarchyStoreItem()
  );
};

//#region StoreItems
export const hasStoreItem = () => {
  try {
    return store.getters.usersPrivilegeData.StoreItem.view;
  } catch (error) {
    return false;
  }
};
export const hasStoreItemViewActive = () => {
  return store.getters.usersPrivilegeData.StoreItem.viewActive;
};
export const hasStoreItemViewArchive = () => {
  return store.getters.usersPrivilegeData.StoreItem.viewArchived;
};
export const hasStoreItemViewBlocked = () => {
  return store.getters.usersPrivilegeData.StoreItem.viewBlocked;
};

export const hasStoreItemReport = () => {
  try {
    return store.getters.usersPrivilegeData.StoreItem.viewReport;
  } catch (error) {
    return false;
  }
};

export const hasStoreItemAdd = () => {
  return store.getters.usersPrivilegeData.StoreItem.itemAdd;
};
export const hasStoreItemEdit = () => {
  return store.getters.usersPrivilegeData.StoreItem.itemUpdate;
};

export const hasStoreItemDeleteImage = () => {
  return store.getters.usersPrivilegeData.StoreItem.itemDeleteImage;
};
export const hasStoreItemFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StoreItem.itemFinaleDelete;
};

export const hasStoreItemChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StoreItem.changeActivationType;
};
export const hasStoreItemActive = () => {
  return store.getters.usersPrivilegeData.StoreItem.itemActive;
};
export const hasStoreItemArchive = () => {
  return store.getters.usersPrivilegeData.StoreItem.itemArchive;
};
export const hasStoreItemBlocked = () => {
  return store.getters.usersPrivilegeData.StoreItem.itemBlocked;
};
//#endregion StoreItems

//#region DropDownLists
export const hasDropDownList = () => {
  try {
    return store.getters.usersPrivilegeData.DropDownList.view;
  } catch (error) {
    return false;
  }
};
export const hasDropDownListViewActive = () => {
  return store.getters.usersPrivilegeData.DropDownList.viewActive;
};
export const hasDropDownListViewArchive = () => {
  return store.getters.usersPrivilegeData.DropDownList.viewArchived;
};
export const hasDropDownListViewBlocked = () => {
  return store.getters.usersPrivilegeData.DropDownList.viewBlocked;
};

export const hasDropDownListAdd = () => {
  return store.getters.usersPrivilegeData.DropDownList.itemAdd;
};
export const hasDropDownListEdit = () => {
  return store.getters.usersPrivilegeData.DropDownList.itemUpdate;
};

export const hasDropDownListDeleteImage = () => {
  return store.getters.usersPrivilegeData.DropDownList.itemDeleteImage;
};
export const hasDropDownListFinaleDelete = () => {
  return store.getters.usersPrivilegeData.DropDownList.itemFinaleDelete;
};

export const hasDropDownListChangeActivationType = () => {
  return store.getters.usersPrivilegeData.DropDownList.changeActivationType;
};
export const hasDropDownListActive = () => {
  return store.getters.usersPrivilegeData.DropDownList.itemActive;
};
export const hasDropDownListArchive = () => {
  return store.getters.usersPrivilegeData.DropDownList.itemArchive;
};
export const hasDropDownListBlocked = () => {
  return store.getters.usersPrivilegeData.DropDownList.itemBlocked;
};
//#endregion DropDownLists

//#region PropertyTypes
export const hasPropertyType = () => {
  try {
    return store.getters.usersPrivilegeData.PropertyType.view;
  } catch (error) {
    return false;
  }
};
export const hasPropertyTypeViewActive = () => {
  return store.getters.usersPrivilegeData.PropertyType.viewActive;
};
export const hasPropertyTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.PropertyType.viewArchived;
};
export const hasPropertyTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.PropertyType.viewBlocked;
};

export const hasPropertyTypeAdd = () => {
  return store.getters.usersPrivilegeData.PropertyType.itemAdd;
};
export const hasPropertyTypeEdit = () => {
  return store.getters.usersPrivilegeData.PropertyType.itemUpdate;
};

export const hasPropertyTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.PropertyType.itemDeleteImage;
};
export const hasPropertyTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PropertyType.itemFinaleDelete;
};

export const hasPropertyTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PropertyType.changeActivationType;
};
export const hasPropertyTypeActive = () => {
  return store.getters.usersPrivilegeData.PropertyType.itemActive;
};
export const hasPropertyTypeArchive = () => {
  return store.getters.usersPrivilegeData.PropertyType.itemArchive;
};
export const hasPropertyTypeBlocked = () => {
  return store.getters.usersPrivilegeData.PropertyType.itemBlocked;
};
//#endregion PropertyTypes

//#region PriceQuotations
export const hasPriceQuotation1 = () => {
  try {
    return (
      hasPriceQuotationNewlyWanted() ||
      hasPriceQuotationWaitingForCustomerAccept() ||
      hasPriceQuotationCanceled() ||
      hasPriceQuotationWaitingForSupplier()
    );
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotation2 = () => {
  try {
    return (
      hasPriceQuotationInJobOrder() ||
      hasPriceQuotationFinishJobOrderNotCustomerReceive() ||
      hasPriceQuotationFinishJobOrderCustomerReceive()
    );
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationNewlyWanted = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotation.view_NewlyWanted;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationWaitingForSupplier = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotation
      .view_WaitingForSupplier;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationWaitingForCustomerAccept = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotation
      .view_WaitingForCustomerAccept;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationCanceled = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotation.view_Canceled;
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationInJobOrder = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotation.view_InJobOrder;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationFinishJobOrderNotCustomerReceive = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotation
      .view_FinishJobOrderNotCustomerReceive;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationFinishJobOrderCustomerReceive = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotation
      .view_FinishJobOrderCustomerReceive;
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationReport = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotation.viewReport;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationReportBill = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotation
      .exportPriceQuotationBill;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationReportSalesStatistics = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .exportPriceQuotationSalesStatistics;
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationAdd = () => {
  return store.getters.usersPrivilegeData.PriceQuotation.itemAdd;
};
export const hasPriceQuotationEdit = () => {
  return store.getters.usersPrivilegeData.PriceQuotation.itemUpdate;
};
export const hasPriceQuotationSendPriceQuotationToClient = () => {
  return store.getters.usersPrivilegeData.PriceQuotation
    .sendPriceQuotationToClient;
};
export const hasPriceQuotationResendPriceQuotations = () => {
  return store.getters.usersPrivilegeData.PriceQuotation.resendPriceQuotations;
};

export const hasPriceQuotationMoveToWaitingForSupplier = () => {
  return store.getters.usersPrivilegeData.PriceQuotation
    .moveToWaitingForSupplier;
};
export const hasPriceQuotationMoveToCanceled = () => {
  return store.getters.usersPrivilegeData.PriceQuotation.moveToCanceled;
};

export const hasPriceQuotationCanAddMoreSales = () => {
  return store.getters.usersPrivilegeData.PriceQuotation.canAddMoreSales;
};
export const hasPriceQuotationChangeDateTime = () => {
  return store.getters.usersPrivilegeData.PriceQuotation.changeDateTime;
};
//#endregion PriceQuotations

//#region PriceQuotationDetails
export const hasPriceQuotationDetail = () => {
  try {
    return (
      hasPriceQuotationDetailNewlyWanted() ||
      hasPriceQuotationDetailWorkProgres() ||
      hasPriceQuotationDetailReviewedByCustomer() ||
      hasPriceQuotationDetailRejectedByCustomer() ||
      hasPriceQuotationDetailCanceledbyCustomer()
    );
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationDetailNewlyWanted = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .view_PriceQuotationDetails_NewlyWanted;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationDetailWorkProgres = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .view_PriceQuotationDetails_WorkProgres;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationDetailReviewedByCustomer = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .view_PriceQuotationDetails_ReviewedByCustomer;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationDetailAcceptedByCustomer = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .view_PriceQuotationDetails_AcceptedByCustomer;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationDetailRejectedByCustomer = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .view_PriceQuotationDetails_RejectedByCustomer;
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationDetailCanceledbyCustomer = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .view_PriceQuotationDetails_CanceledbyCustomer;
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationDetailMoveToWorkProgres = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .move_PriceQuotationDetails_WorkProgres;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationDetailMoveToReviewedByCustomer = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .move_PriceQuotationDetails_ReviewedByCustomer;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationDetailMoveToRejectedByCustomer = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .move_PriceQuotationDetails_RejectedByCustomer;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationDetailMoveToNewlyWanted = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .move_PriceQuotationDetails_NewlyWanted;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationDetailMoveToCanceledbyCustomer = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .move_PriceQuotationDetails_CanceledbyCustomer;
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationDetailSendRequestProductItemReport = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .sendRequestProductItemReport;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationDetailExportRequestProductItemReport = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationDetails
      .exportRequestProductItemReport;
  } catch (error) {
    return false;
  }
};
//#endregion PriceQuotationDetails

//#region PriceQuotationAffiliateOperations
export const hasPriceQuotationAffiliateOperation = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
      .view;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationAffiliateOperationViewActive = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .viewActive;
};
export const hasPriceQuotationAffiliateOperationViewArchive = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .viewArchived;
};
export const hasPriceQuotationAffiliateOperationViewBlocked = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .viewBlocked;
};

export const hasPriceQuotationAffiliateOperationAdd = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .itemAdd;
};
export const hasPriceQuotationAffiliateOperationEdit = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .itemUpdate;
};
export const hasPriceQuotationAffiliateOperationDeleteImage = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .itemDeleteImage;
};
export const hasPriceQuotationAffiliateOperationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .itemFinaleDelete;
};

export const hasPriceQuotationAffiliateOperationChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .changeActivationType;
};
export const hasPriceQuotationAffiliateOperationActive = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .itemActive;
};
export const hasPriceQuotationAffiliateOperationArchive = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .itemArchive;
};
export const hasPriceQuotationAffiliateOperationBlocked = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .itemBlocked;
};
export const hasPriceQuotationAffiliateOperationSendToClient = () => {
  return store.getters.usersPrivilegeData.PriceQuotationAffiliateOperation
    .sendPriceQuotationAffiliateOperationToClient;
};
//#endregion PriceQuotationAffiliateOperations

//#region QuotationPriceHistorys
export const hasQuotationPriceHistory = () => {
  try {
    return store.getters.usersPrivilegeData.QuotationPriceHistory.view;
  } catch (error) {
    return false;
  }
};
export const hasQuotationPriceHistoryViewActive = () => {
  return store.getters.usersPrivilegeData.QuotationPriceHistory.viewActive;
};

export const hasQuotationPriceHistoryAdd = () => {
  return store.getters.usersPrivilegeData.QuotationPriceHistory.itemAdd;
};
export const hasQuotationPriceHistoryEdit = () => {
  return store.getters.usersPrivilegeData.QuotationPriceHistory.itemUpdate;
};
export const hasQuotationPriceHistoryFinaleDelete = () => {
  return store.getters.usersPrivilegeData.QuotationPriceHistory
    .itemFinaleDelete;
};
//#endregion QuotationPriceHistorys

//#region PriceQuotationJobOrders
export const hasPriceQuotationJobOrder = () => {
  try {
    return (
      hasPriceQuotationJobOrderNewlyWanted() ||
      hasPriceQuotationJobOrderWorkProgres() ||
      hasPriceQuotationJobOrderFinishNotCustomerReceived() ||
      hasPriceQuotationJobOrderFinishCustomerReceived() ||
      hasPriceQuotationJobOrderCanceled()
    );
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationJobOrderReport = () => {
  try {
    return store.getters.usersPrivilegeData.StoreItem.viewReport;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderCusomersClosedJobReport = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .viewCusomersClosedJobReport;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderStaffAchievementsReport = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .viewStaffAchievementsReport;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderReportExport = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .exportJobOrderReport;
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationJobOrderNewlyWanted = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .view_PriceQuotationJobOrder_NewlyWanted;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderWorkProgres = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .view_PriceQuotationJobOrder_WorkProgres;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderFinishNotCustomerReceived = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .view_PriceQuotationJobOrder_FinishNotCustomerReceived;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderFinishCustomerReceived = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .view_PriceQuotationJobOrder_FinishCustomerReceived;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderCanceled = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .view_PriceQuotationJobOrder_Canceled;
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationJobOrderMoveToNewlyWanted = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .move_PriceQuotationJobOrder_NewlyWanted;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderMoveToWorkProgres = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .move_PriceQuotationJobOrder_WorkProgres;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderMoveToFinishNotCustomerReceived = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .move_PriceQuotationJobOrder_FinishNotCustomerReceived;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderMoveToFinishCustomerReceived = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .move_PriceQuotationJobOrder_FinishCustomerReceived;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderMoveToCanceled = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .move_PriceQuotationJobOrder_Canceled;
  } catch (error) {
    return false;
  }
};

export const hasPriceQuotationJobOrderAdd = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder.itemAdd;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderEdit = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder.itemUpdate;
  } catch (error) {
    return false;
  }
};
export const hasPriceQuotationJobOrderDeleteImage = () => {
  try {
    return store.getters.usersPrivilegeData.PriceQuotationJobOrder
      .itemDeleteImage;
  } catch (error) {
    return false;
  }
};

//#endregion PriceQuotationJobOrders

//#endregion Products

//#region InterestsAndFollowUps

//#region Interests
export const hasInterest = () => {
  return store.getters.usersPrivilegeData.Interest.view;
};
export const hasInterestViewActive = () => {
  return store.getters.usersPrivilegeData.Interest.viewActive;
};
export const hasInterestViewArchive = () => {
  return store.getters.usersPrivilegeData.Interest.viewArchived;
};
export const hasInterestViewBlocked = () => {
  return store.getters.usersPrivilegeData.Interest.viewBlocked;
};

export const hasInterestAdd = () => {
  return store.getters.usersPrivilegeData.Interest.itemAdd;
};
export const hasInterestEdit = () => {
  return store.getters.usersPrivilegeData.Interest.itemUpdate;
};

export const hasInterestDeleteImage = () => {
  return store.getters.usersPrivilegeData.Interest.itemDeleteImage;
};
export const hasInterestFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Interest.itemFinaleDelete;
};

export const hasInterestChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Interest.changeActivationType;
};
export const hasInterestActive = () => {
  return store.getters.usersPrivilegeData.Interest.itemActive;
};
export const hasInterestArchive = () => {
  return store.getters.usersPrivilegeData.Interest.itemArchive;
};
export const hasInterestBlocked = () => {
  return store.getters.usersPrivilegeData.Interest.itemBlocked;
};
//#endregion Interests

//#region InterestFollowUps
export const hasInterestFollowUp = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.view;
};
export const hasInterestFollowUpViewActive = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.viewActive;
};
export const hasInterestFollowUpViewArchive = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.viewArchived;
};
export const hasInterestFollowUpViewBlocked = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.viewBlocked;
};

export const hasInterestFollowUpAdd = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.itemAdd;
};
export const hasInterestFollowUpEdit = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.itemUpdate;
};

export const hasInterestFollowUpDeleteImage = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.itemDeleteImage;
};
export const hasInterestFollowUpFinaleDelete = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.itemFinaleDelete;
};

export const hasInterestFollowUpChangeActivationType = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.changeActivationType;
};
export const hasInterestFollowUpActive = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.itemActive;
};
export const hasInterestFollowUpArchive = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.itemArchive;
};
export const hasInterestFollowUpBlocked = () => {
  return store.getters.usersPrivilegeData.InterestFollowUp.itemBlocked;
};
//#endregion InterestFollowUps

//#endregion InterestsAndFollowUps

//#region Users
export const hasUsers = () => {
  return (
    hasAdminsEgypt() ||
    hasMasterAdmin() ||
    hasEmployee() ||
    hasStudent() ||
    hasSupplier() ||
    hasParent() ||
    hasClient() ||
    hasUserSettings()
  );
};
//#region AdminsEgypt
export const hasAdminsEgypt = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.view;
};
export const hasAdminsEgyptViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.viewActive;
};
export const hasAdminsEgyptViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.viewArchived;
};
export const hasAdminsEgyptViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.viewBlocked;
};

export const hasAdminsEgyptAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.itemAdd;
};
export const hasAdminsEgyptEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.itemUpdate;
};

export const hasAdminsEgyptDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.itemDeleteImage;
};
export const hasAdminsEgyptFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.itemFinaleDelete;
};

export const hasAdminsEgyptChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.changeActivationType;
};
export const hasAdminsEgyptActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.itemActive;
};
export const hasAdminsEgyptArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.itemArchive;
};
export const hasAdminsEgyptBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgypt.itemBlocked;
};
//#endregion AdminsEgypt

//#region MasterAdmin
export const hasMasterAdmin = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.view;
};
export const hasMasterAdminViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.viewActive;
};
export const hasMasterAdminViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.viewArchived;
};
export const hasMasterAdminViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.viewBlocked;
};

export const hasMasterAdminAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.itemAdd;
};
export const hasMasterAdminEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.itemUpdate;
};

export const hasMasterAdminDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.itemDeleteImage;
};
export const hasMasterAdminFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.itemFinaleDelete;
};

export const hasMasterAdminChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.changeActivationType;
};
export const hasMasterAdminActive = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.itemActive;
};
export const hasMasterAdminArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.itemArchive;
};
export const hasMasterAdminBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdmin.itemBlocked;
};
//#endregion MasterAdmin

//#region Employee
export const hasEmployee = () => {
  return store.getters.usersPrivilegeData.Employee.view;
};
export const hasEmployeeViewActive = () => {
  return store.getters.usersPrivilegeData.Employee.viewActive;
};
export const hasEmployeeViewArchive = () => {
  return store.getters.usersPrivilegeData.Employee.viewArchived;
};
export const hasEmployeeViewBlocked = () => {
  return store.getters.usersPrivilegeData.Employee.viewBlocked;
};

export const hasEmployeeAdd = () => {
  return store.getters.usersPrivilegeData.Employee.itemAdd;
};
export const hasEmployeeEdit = () => {
  return store.getters.usersPrivilegeData.Employee.itemUpdate;
};

export const hasEmployeeDeleteImage = () => {
  return store.getters.usersPrivilegeData.Employee.itemDeleteImage;
};
export const hasEmployeeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Employee.itemFinaleDelete;
};

export const hasEmployeeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Employee.changeActivationType;
};
export const hasEmployeeActive = () => {
  return store.getters.usersPrivilegeData.Employee.itemActive;
};
export const hasEmployeeArchive = () => {
  return store.getters.usersPrivilegeData.Employee.itemArchive;
};
export const hasEmployeeBlocked = () => {
  return store.getters.usersPrivilegeData.Employee.itemBlocked;
};
//#endregion Employee

//#region Student
export const hasStudent = () => {
  return store.getters.usersPrivilegeData.Student.view;
};
export const hasStudentViewActive = () => {
  return store.getters.usersPrivilegeData.Student.viewActive;
};
export const hasStudentViewArchive = () => {
  return store.getters.usersPrivilegeData.Student.viewArchived;
};
export const hasStudentViewBlocked = () => {
  return store.getters.usersPrivilegeData.Student.viewBlocked;
};

export const hasStudentAdd = () => {
  return store.getters.usersPrivilegeData.Student.itemAdd;
};
export const hasStudentEdit = () => {
  return store.getters.usersPrivilegeData.Student.itemUpdate;
};

export const hasStudentDeleteImage = () => {
  return store.getters.usersPrivilegeData.Student.itemDeleteImage;
};
export const hasStudentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Student.itemFinaleDelete;
};

export const hasStudentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Student.changeActivationType;
};
export const hasStudentActive = () => {
  return store.getters.usersPrivilegeData.Student.itemActive;
};
export const hasStudentArchive = () => {
  return store.getters.usersPrivilegeData.Student.itemArchive;
};
export const hasStudentBlocked = () => {
  return store.getters.usersPrivilegeData.Student.itemBlocked;
};
//#endregion Student

//#region Supplier
export const hasSupplier = () => {
  return store.getters.usersPrivilegeData.Supplier.view;
};
export const hasSupplierViewActive = () => {
  return store.getters.usersPrivilegeData.Supplier.viewActive;
};
export const hasSupplierViewArchive = () => {
  return store.getters.usersPrivilegeData.Supplier.viewArchived;
};
export const hasSupplierViewBlocked = () => {
  return store.getters.usersPrivilegeData.Supplier.viewBlocked;
};

export const hasSupplierAdd = () => {
  return store.getters.usersPrivilegeData.Supplier.itemAdd;
};
export const hasSupplierEdit = () => {
  return store.getters.usersPrivilegeData.Supplier.itemUpdate;
};

export const hasSupplierDeleteImage = () => {
  return store.getters.usersPrivilegeData.Supplier.itemDeleteImage;
};
export const hasSupplierFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Supplier.itemFinaleDelete;
};

export const hasSupplierChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Supplier.changeActivationType;
};
export const hasSupplierActive = () => {
  return store.getters.usersPrivilegeData.Supplier.itemActive;
};
export const hasSupplierArchive = () => {
  return store.getters.usersPrivilegeData.Supplier.itemArchive;
};
export const hasSupplierBlocked = () => {
  return store.getters.usersPrivilegeData.Supplier.itemBlocked;
};
//#endregion Supplier

//#region Parent
export const hasParent = () => {
  return store.getters.usersPrivilegeData.Parent.view;
};
export const hasParentViewActive = () => {
  return store.getters.usersPrivilegeData.Parent.viewActive;
};
export const hasParentViewArchive = () => {
  return store.getters.usersPrivilegeData.Parent.viewArchived;
};
export const hasParentViewBlocked = () => {
  return store.getters.usersPrivilegeData.Parent.viewBlocked;
};

export const hasParentAdd = () => {
  return store.getters.usersPrivilegeData.Parent.itemAdd;
};
export const hasParentEdit = () => {
  return store.getters.usersPrivilegeData.Parent.itemUpdate;
};

export const hasParentDeleteImage = () => {
  return store.getters.usersPrivilegeData.Parent.itemDeleteImage;
};
export const hasParentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Parent.itemFinaleDelete;
};

export const hasParentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Parent.changeActivationType;
};
export const hasParentActive = () => {
  return store.getters.usersPrivilegeData.Parent.itemActive;
};
export const hasParentArchive = () => {
  return store.getters.usersPrivilegeData.Parent.itemArchive;
};
export const hasParentBlocked = () => {
  return store.getters.usersPrivilegeData.Parent.itemBlocked;
};
//#endregion Parent

//#region Client
export const hasClient = () => {
  return store.getters.usersPrivilegeData.Client.view;
};
export const hasClientViewActive = () => {
  return store.getters.usersPrivilegeData.Client.viewActive;
};
export const hasClientViewArchive = () => {
  return store.getters.usersPrivilegeData.Client.viewArchived;
};
export const hasClientViewBlocked = () => {
  return store.getters.usersPrivilegeData.Client.viewBlocked;
};

export const hasClientAdd = () => {
  return store.getters.usersPrivilegeData.Client.itemAdd;
};
export const hasClientEdit = () => {
  return store.getters.usersPrivilegeData.Client.itemUpdate;
};

export const hasClientDeleteImage = () => {
  return store.getters.usersPrivilegeData.Client.itemDeleteImage;
};
export const hasClientFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Client.itemFinaleDelete;
};

export const hasClientChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Client.changeActivationType;
};
export const hasClientActive = () => {
  return store.getters.usersPrivilegeData.Client.itemActive;
};
export const hasClientArchive = () => {
  return store.getters.usersPrivilegeData.Client.itemArchive;
};
export const hasClientBlocked = () => {
  return store.getters.usersPrivilegeData.Client.itemBlocked;
};
//#endregion Client

//#endregion Users

//#region UsersFamilies
//#region AdminsEgyptFamily
export const hasAdminsEgyptFamily = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.view;
};
export const hasAdminsEgyptFamilyViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.viewActive;
};
export const hasAdminsEgyptFamilyViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.viewArchived;
};
export const hasAdminsEgyptFamilyViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.viewBlocked;
};

export const hasAdminsEgyptFamilyAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.itemAdd;
};
export const hasAdminsEgyptFamilyEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.itemUpdate;
};

export const hasAdminsEgyptFamilyDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.itemDeleteImage;
};
export const hasAdminsEgyptFamilyFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.itemFinaleDelete;
};

export const hasAdminsEgyptFamilyChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily
    .changeActivationType;
};
export const hasAdminsEgyptFamilyActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.itemActive;
};
export const hasAdminsEgyptFamilyArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.itemArchive;
};
export const hasAdminsEgyptFamilyBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptFamily.itemBlocked;
};
//#endregion AdminsEgyptFamily

//#region MasterAdminFamily
export const hasMasterAdminFamily = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.view;
};
export const hasMasterAdminFamilyViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.viewActive;
};
export const hasMasterAdminFamilyViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.viewArchived;
};
export const hasMasterAdminFamilyViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.viewBlocked;
};

export const hasMasterAdminFamilyAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.itemAdd;
};
export const hasMasterAdminFamilyEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.itemUpdate;
};

export const hasMasterAdminFamilyDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.itemDeleteImage;
};
export const hasMasterAdminFamilyFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.itemFinaleDelete;
};

export const hasMasterAdminFamilyChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily
    .changeActivationType;
};
export const hasMasterAdminFamilyActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.itemActive;
};
export const hasMasterAdminFamilyArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.itemArchive;
};
export const hasMasterAdminFamilyBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminFamily.itemBlocked;
};
//#endregion MasterAdminFamily

//#region EmployeeFamily
export const hasEmployeeFamily = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.view;
};
export const hasEmployeeFamilyViewActive = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.viewActive;
};
export const hasEmployeeFamilyViewArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.viewArchived;
};
export const hasEmployeeFamilyViewBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.viewBlocked;
};

export const hasEmployeeFamilyAdd = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.itemAdd;
};
export const hasEmployeeFamilyEdit = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.itemUpdate;
};

export const hasEmployeeFamilyDeleteImage = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.itemDeleteImage;
};
export const hasEmployeeFamilyFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.itemFinaleDelete;
};

export const hasEmployeeFamilyChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.changeActivationType;
};
export const hasEmployeeFamilyActive = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.itemActive;
};
export const hasEmployeeFamilyArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.itemArchive;
};
export const hasEmployeeFamilyBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeFamily.itemBlocked;
};
//#endregion EmployeeFamily

//#region StudentFamily
export const hasStudentFamily = () => {
  return store.getters.usersPrivilegeData.StudentFamily.view;
};
export const hasStudentFamilyViewActive = () => {
  return store.getters.usersPrivilegeData.StudentFamily.viewActive;
};
export const hasStudentFamilyViewArchive = () => {
  return store.getters.usersPrivilegeData.StudentFamily.viewArchived;
};
export const hasStudentFamilyViewBlocked = () => {
  return store.getters.usersPrivilegeData.StudentFamily.viewBlocked;
};

export const hasStudentFamilyAdd = () => {
  return store.getters.usersPrivilegeData.StudentFamily.itemAdd;
};
export const hasStudentFamilyEdit = () => {
  return store.getters.usersPrivilegeData.StudentFamily.itemUpdate;
};

export const hasStudentFamilyDeleteImage = () => {
  return store.getters.usersPrivilegeData.StudentFamily.itemDeleteImage;
};
export const hasStudentFamilyFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StudentFamily.itemFinaleDelete;
};

export const hasStudentFamilyChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StudentFamily.changeActivationType;
};
export const hasStudentFamilyActive = () => {
  return store.getters.usersPrivilegeData.StudentFamily.itemActive;
};
export const hasStudentFamilyArchive = () => {
  return store.getters.usersPrivilegeData.StudentFamily.itemArchive;
};
export const hasStudentFamilyBlocked = () => {
  return store.getters.usersPrivilegeData.StudentFamily.itemBlocked;
};
//#endregion StudentFamily

//#region SupplierFamily
export const hasSupplierFamily = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.view;
};
export const hasSupplierFamilyViewActive = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.viewActive;
};
export const hasSupplierFamilyViewArchive = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.viewArchived;
};
export const hasSupplierFamilyViewBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.viewBlocked;
};

export const hasSupplierFamilyAdd = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.itemAdd;
};
export const hasSupplierFamilyEdit = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.itemUpdate;
};

export const hasSupplierFamilyDeleteImage = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.itemDeleteImage;
};
export const hasSupplierFamilyFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.itemFinaleDelete;
};

export const hasSupplierFamilyChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.changeActivationType;
};
export const hasSupplierFamilyActive = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.itemActive;
};
export const hasSupplierFamilyArchive = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.itemArchive;
};
export const hasSupplierFamilyBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierFamily.itemBlocked;
};
//#endregion SupplierFamily

//#region ClientFamily
export const hasClientFamily = () => {
  return store.getters.usersPrivilegeData.ClientFamily.view;
};
export const hasClientFamilyViewActive = () => {
  return store.getters.usersPrivilegeData.ClientFamily.viewActive;
};
export const hasClientFamilyViewArchive = () => {
  return store.getters.usersPrivilegeData.ClientFamily.viewArchived;
};
export const hasClientFamilyViewBlocked = () => {
  return store.getters.usersPrivilegeData.ClientFamily.viewBlocked;
};

export const hasClientFamilyAdd = () => {
  return store.getters.usersPrivilegeData.ClientFamily.itemAdd;
};
export const hasClientFamilyEdit = () => {
  return store.getters.usersPrivilegeData.ClientFamily.itemUpdate;
};

export const hasClientFamilyDeleteImage = () => {
  return store.getters.usersPrivilegeData.ClientFamily.itemDeleteImage;
};
export const hasClientFamilyFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ClientFamily.itemFinaleDelete;
};

export const hasClientFamilyChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ClientFamily.changeActivationType;
};
export const hasClientFamilyActive = () => {
  return store.getters.usersPrivilegeData.ClientFamily.itemActive;
};
export const hasClientFamilyArchive = () => {
  return store.getters.usersPrivilegeData.ClientFamily.itemArchive;
};
export const hasClientFamilyBlocked = () => {
  return store.getters.usersPrivilegeData.ClientFamily.itemBlocked;
};
//#endregion ClientFamily

//#endregion UsersFamilies

//#region UserScientificDegrees
//#region AdminsEgyptScientificDegree
export const hasAdminsEgyptScientificDegree = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree.view;
};
export const hasAdminsEgyptScientificDegreeViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .viewActive;
};
export const hasAdminsEgyptScientificDegreeViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .viewArchived;
};
export const hasAdminsEgyptScientificDegreeViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .viewBlocked;
};

export const hasAdminsEgyptScientificDegreeAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree.itemAdd;
};
export const hasAdminsEgyptScientificDegreeEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .itemUpdate;
};

export const hasAdminsEgyptScientificDegreeDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .itemDeleteImage;
};
export const hasAdminsEgyptScientificDegreeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .itemFinaleDelete;
};

export const hasAdminsEgyptScientificDegreeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .changeActivationType;
};
export const hasAdminsEgyptScientificDegreeActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .itemActive;
};
export const hasAdminsEgyptScientificDegreeArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .itemArchive;
};
export const hasAdminsEgyptScientificDegreeBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptScientificDegree
    .itemBlocked;
};
//#endregion AdminsEgyptScientificDegree

//#region MasterAdminScientificDegree
export const hasMasterAdminScientificDegree = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree.view;
};
export const hasMasterAdminScientificDegreeViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .viewActive;
};
export const hasMasterAdminScientificDegreeViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .viewArchived;
};
export const hasMasterAdminScientificDegreeViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .viewBlocked;
};

export const hasMasterAdminScientificDegreeAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree.itemAdd;
};
export const hasMasterAdminScientificDegreeEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .itemUpdate;
};

export const hasMasterAdminScientificDegreeDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .itemDeleteImage;
};
export const hasMasterAdminScientificDegreeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .itemFinaleDelete;
};

export const hasMasterAdminScientificDegreeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .changeActivationType;
};
export const hasMasterAdminScientificDegreeActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .itemActive;
};
export const hasMasterAdminScientificDegreeArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .itemArchive;
};
export const hasMasterAdminScientificDegreeBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminScientificDegree
    .itemBlocked;
};
//#endregion MasterAdminScientificDegree

//#region EmployeeScientificDegree
export const hasEmployeeScientificDegree = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree.view;
};
export const hasEmployeeScientificDegreeViewActive = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree.viewActive;
};
export const hasEmployeeScientificDegreeViewArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree.viewArchived;
};
export const hasEmployeeScientificDegreeViewBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree.viewBlocked;
};

export const hasEmployeeScientificDegreeAdd = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree.itemAdd;
};
export const hasEmployeeScientificDegreeEdit = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree.itemUpdate;
};

export const hasEmployeeScientificDegreeDeleteImage = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree
    .itemDeleteImage;
};
export const hasEmployeeScientificDegreeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree
    .itemFinaleDelete;
};

export const hasEmployeeScientificDegreeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree
    .changeActivationType;
};
export const hasEmployeeScientificDegreeActive = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree.itemActive;
};
export const hasEmployeeScientificDegreeArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree.itemArchive;
};
export const hasEmployeeScientificDegreeBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeScientificDegree.itemBlocked;
};
//#endregion EmployeeScientificDegree

//#region StudentScientificDegree
export const hasStudentScientificDegree = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree.view;
};
export const hasStudentScientificDegreeViewActive = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree.viewActive;
};
export const hasStudentScientificDegreeViewArchive = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree.viewArchived;
};
export const hasStudentScientificDegreeViewBlocked = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree.viewBlocked;
};

export const hasStudentScientificDegreeAdd = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree.itemAdd;
};
export const hasStudentScientificDegreeEdit = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree.itemUpdate;
};

export const hasStudentScientificDegreeDeleteImage = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree
    .itemDeleteImage;
};
export const hasStudentScientificDegreeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree
    .itemFinaleDelete;
};

export const hasStudentScientificDegreeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree
    .changeActivationType;
};
export const hasStudentScientificDegreeActive = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree.itemActive;
};
export const hasStudentScientificDegreeArchive = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree.itemArchive;
};
export const hasStudentScientificDegreeBlocked = () => {
  return store.getters.usersPrivilegeData.StudentScientificDegree.itemBlocked;
};
//#endregion StudentScientificDegree

//#region SupplierScientificDegree
export const hasSupplierScientificDegree = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree.view;
};
export const hasSupplierScientificDegreeViewActive = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree.viewActive;
};
export const hasSupplierScientificDegreeViewArchive = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree.viewArchived;
};
export const hasSupplierScientificDegreeViewBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree.viewBlocked;
};

export const hasSupplierScientificDegreeAdd = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree.itemAdd;
};
export const hasSupplierScientificDegreeEdit = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree.itemUpdate;
};

export const hasSupplierScientificDegreeDeleteImage = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree
    .itemDeleteImage;
};
export const hasSupplierScientificDegreeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree
    .itemFinaleDelete;
};

export const hasSupplierScientificDegreeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree
    .changeActivationType;
};
export const hasSupplierScientificDegreeActive = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree.itemActive;
};
export const hasSupplierScientificDegreeArchive = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree.itemArchive;
};
export const hasSupplierScientificDegreeBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierScientificDegree.itemBlocked;
};
//#endregion SupplierScientificDegree

//#region ParentScientificDegree
export const hasParentScientificDegree = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree.view;
};
export const hasParentScientificDegreeViewActive = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree.viewActive;
};
export const hasParentScientificDegreeViewArchive = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree.viewArchived;
};
export const hasParentScientificDegreeViewBlocked = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree.viewBlocked;
};

export const hasParentScientificDegreeAdd = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree.itemAdd;
};
export const hasParentScientificDegreeEdit = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree.itemUpdate;
};

export const hasParentScientificDegreeDeleteImage = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree
    .itemDeleteImage;
};
export const hasParentScientificDegreeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree
    .itemFinaleDelete;
};

export const hasParentScientificDegreeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree
    .changeActivationType;
};
export const hasParentScientificDegreeActive = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree.itemActive;
};
export const hasParentScientificDegreeArchive = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree.itemArchive;
};
export const hasParentScientificDegreeBlocked = () => {
  return store.getters.usersPrivilegeData.ParentScientificDegree.itemBlocked;
};
//#endregion ParentScientificDegree

//#region ClientScientificDegree
export const hasClientScientificDegree = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree.view;
};
export const hasClientScientificDegreeViewActive = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree.viewActive;
};
export const hasClientScientificDegreeViewArchive = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree.viewArchived;
};
export const hasClientScientificDegreeViewBlocked = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree.viewBlocked;
};

export const hasClientScientificDegreeAdd = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree.itemAdd;
};
export const hasClientScientificDegreeEdit = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree.itemUpdate;
};

export const hasClientScientificDegreeDeleteImage = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree
    .itemDeleteImage;
};
export const hasClientScientificDegreeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree
    .itemFinaleDelete;
};

export const hasClientScientificDegreeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree
    .changeActivationType;
};
export const hasClientScientificDegreeActive = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree.itemActive;
};
export const hasClientScientificDegreeArchive = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree.itemArchive;
};
export const hasClientScientificDegreeBlocked = () => {
  return store.getters.usersPrivilegeData.ClientScientificDegree.itemBlocked;
};
//#endregion ClientScientificDegree

//#endregion UserScientificDegrees

//#region UserQualifications
//#region AdminsEgyptQualification
export const hasAdminsEgyptQualification = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification.view;
};
export const hasAdminsEgyptQualificationViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification.viewActive;
};
export const hasAdminsEgyptQualificationViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification.viewArchived;
};
export const hasAdminsEgyptQualificationViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification.viewBlocked;
};

export const hasAdminsEgyptQualificationAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification.itemAdd;
};
export const hasAdminsEgyptQualificationEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification.itemUpdate;
};

export const hasAdminsEgyptQualificationDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification
    .itemDeleteImage;
};
export const hasAdminsEgyptQualificationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification
    .itemFinaleDelete;
};

export const hasAdminsEgyptQualificationChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification
    .changeActivationType;
};
export const hasAdminsEgyptQualificationActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification.itemActive;
};
export const hasAdminsEgyptQualificationArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification.itemArchive;
};
export const hasAdminsEgyptQualificationBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptQualification.itemBlocked;
};
//#endregion AdminsEgyptQualification

//#region MasterAdminQualification
export const hasMasterAdminQualification = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification.view;
};
export const hasMasterAdminQualificationViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification.viewActive;
};
export const hasMasterAdminQualificationViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification.viewArchived;
};
export const hasMasterAdminQualificationViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification.viewBlocked;
};

export const hasMasterAdminQualificationAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification.itemAdd;
};
export const hasMasterAdminQualificationEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification.itemUpdate;
};

export const hasMasterAdminQualificationDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification
    .itemDeleteImage;
};
export const hasMasterAdminQualificationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification
    .itemFinaleDelete;
};

export const hasMasterAdminQualificationChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification
    .changeActivationType;
};
export const hasMasterAdminQualificationActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification.itemActive;
};
export const hasMasterAdminQualificationArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification.itemArchive;
};
export const hasMasterAdminQualificationBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminQualification.itemBlocked;
};
//#endregion MasterAdminQualification

//#region EmployeeQualification
export const hasEmployeeQualification = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.view;
};
export const hasEmployeeQualificationViewActive = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.viewActive;
};
export const hasEmployeeQualificationViewArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.viewArchived;
};
export const hasEmployeeQualificationViewBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.viewBlocked;
};

export const hasEmployeeQualificationAdd = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.itemAdd;
};
export const hasEmployeeQualificationEdit = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.itemUpdate;
};

export const hasEmployeeQualificationDeleteImage = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.itemDeleteImage;
};
export const hasEmployeeQualificationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification
    .itemFinaleDelete;
};

export const hasEmployeeQualificationChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification
    .changeActivationType;
};
export const hasEmployeeQualificationActive = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.itemActive;
};
export const hasEmployeeQualificationArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.itemArchive;
};
export const hasEmployeeQualificationBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeQualification.itemBlocked;
};
//#endregion EmployeeQualification

//#region StudentQualification
export const hasStudentQualification = () => {
  return store.getters.usersPrivilegeData.StudentQualification.view;
};
export const hasStudentQualificationViewActive = () => {
  return store.getters.usersPrivilegeData.StudentQualification.viewActive;
};
export const hasStudentQualificationViewArchive = () => {
  return store.getters.usersPrivilegeData.StudentQualification.viewArchived;
};
export const hasStudentQualificationViewBlocked = () => {
  return store.getters.usersPrivilegeData.StudentQualification.viewBlocked;
};

export const hasStudentQualificationAdd = () => {
  return store.getters.usersPrivilegeData.StudentQualification.itemAdd;
};
export const hasStudentQualificationEdit = () => {
  return store.getters.usersPrivilegeData.StudentQualification.itemUpdate;
};

export const hasStudentQualificationDeleteImage = () => {
  return store.getters.usersPrivilegeData.StudentQualification.itemDeleteImage;
};
export const hasStudentQualificationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StudentQualification.itemFinaleDelete;
};

export const hasStudentQualificationChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StudentQualification
    .changeActivationType;
};
export const hasStudentQualificationActive = () => {
  return store.getters.usersPrivilegeData.StudentQualification.itemActive;
};
export const hasStudentQualificationArchive = () => {
  return store.getters.usersPrivilegeData.StudentQualification.itemArchive;
};
export const hasStudentQualificationBlocked = () => {
  return store.getters.usersPrivilegeData.StudentQualification.itemBlocked;
};
//#endregion StudentQualification

//#region SupplierQualification
export const hasSupplierQualification = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.view;
};
export const hasSupplierQualificationViewActive = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.viewActive;
};
export const hasSupplierQualificationViewArchive = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.viewArchived;
};
export const hasSupplierQualificationViewBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.viewBlocked;
};

export const hasSupplierQualificationAdd = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.itemAdd;
};
export const hasSupplierQualificationEdit = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.itemUpdate;
};

export const hasSupplierQualificationDeleteImage = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.itemDeleteImage;
};
export const hasSupplierQualificationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SupplierQualification
    .itemFinaleDelete;
};

export const hasSupplierQualificationChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SupplierQualification
    .changeActivationType;
};
export const hasSupplierQualificationActive = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.itemActive;
};
export const hasSupplierQualificationArchive = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.itemArchive;
};
export const hasSupplierQualificationBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierQualification.itemBlocked;
};
//#endregion SupplierQualification

//#region ParentQualification
export const hasParentQualification = () => {
  return store.getters.usersPrivilegeData.ParentQualification.view;
};
export const hasParentQualificationViewActive = () => {
  return store.getters.usersPrivilegeData.ParentQualification.viewActive;
};
export const hasParentQualificationViewArchive = () => {
  return store.getters.usersPrivilegeData.ParentQualification.viewArchived;
};
export const hasParentQualificationViewBlocked = () => {
  return store.getters.usersPrivilegeData.ParentQualification.viewBlocked;
};

export const hasParentQualificationAdd = () => {
  return store.getters.usersPrivilegeData.ParentQualification.itemAdd;
};
export const hasParentQualificationEdit = () => {
  return store.getters.usersPrivilegeData.ParentQualification.itemUpdate;
};

export const hasParentQualificationDeleteImage = () => {
  return store.getters.usersPrivilegeData.ParentQualification.itemDeleteImage;
};
export const hasParentQualificationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ParentQualification.itemFinaleDelete;
};

export const hasParentQualificationChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ParentQualification
    .changeActivationType;
};
export const hasParentQualificationActive = () => {
  return store.getters.usersPrivilegeData.ParentQualification.itemActive;
};
export const hasParentQualificationArchive = () => {
  return store.getters.usersPrivilegeData.ParentQualification.itemArchive;
};
export const hasParentQualificationBlocked = () => {
  return store.getters.usersPrivilegeData.ParentQualification.itemBlocked;
};
//#endregion ParentQualification

//#region ClientQualification
export const hasClientQualification = () => {
  return store.getters.usersPrivilegeData.ClientQualification.view;
};
export const hasClientQualificationViewActive = () => {
  return store.getters.usersPrivilegeData.ClientQualification.viewActive;
};
export const hasClientQualificationViewArchive = () => {
  return store.getters.usersPrivilegeData.ClientQualification.viewArchived;
};
export const hasClientQualificationViewBlocked = () => {
  return store.getters.usersPrivilegeData.ClientQualification.viewBlocked;
};

export const hasClientQualificationAdd = () => {
  return store.getters.usersPrivilegeData.ClientQualification.itemAdd;
};
export const hasClientQualificationEdit = () => {
  return store.getters.usersPrivilegeData.ClientQualification.itemUpdate;
};

export const hasClientQualificationDeleteImage = () => {
  return store.getters.usersPrivilegeData.ClientQualification.itemDeleteImage;
};
export const hasClientQualificationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ClientQualification.itemFinaleDelete;
};

export const hasClientQualificationChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ClientQualification
    .changeActivationType;
};
export const hasClientQualificationActive = () => {
  return store.getters.usersPrivilegeData.ClientQualification.itemActive;
};
export const hasClientQualificationArchive = () => {
  return store.getters.usersPrivilegeData.ClientQualification.itemArchive;
};
export const hasClientQualificationBlocked = () => {
  return store.getters.usersPrivilegeData.ClientQualification.itemBlocked;
};
//#endregion ClientQualification

//#endregion UserQualifications

//#region UserPersonalCards
//#region AdminsEgyptPersonalCard
export const hasAdminsEgyptPersonalCard = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard.view;
};
export const hasAdminsEgyptPersonalCardViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard.viewActive;
};
export const hasAdminsEgyptPersonalCardViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard.viewArchived;
};
export const hasAdminsEgyptPersonalCardViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard.viewBlocked;
};

export const hasAdminsEgyptPersonalCardAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard.itemAdd;
};
export const hasAdminsEgyptPersonalCardEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard.itemUpdate;
};

export const hasAdminsEgyptPersonalCardDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard
    .itemDeleteImage;
};
export const hasAdminsEgyptPersonalCardFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard
    .itemFinaleDelete;
};

export const hasAdminsEgyptPersonalCardChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard
    .changeActivationType;
};
export const hasAdminsEgyptPersonalCardActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard.itemActive;
};
export const hasAdminsEgyptPersonalCardArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard.itemArchive;
};
export const hasAdminsEgyptPersonalCardBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptPersonalCard.itemBlocked;
};
//#endregion AdminsEgyptPersonalCard

//#region MasterAdminPersonalCard
export const hasMasterAdminPersonalCard = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard.view;
};
export const hasMasterAdminPersonalCardViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard.viewActive;
};
export const hasMasterAdminPersonalCardViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard.viewArchived;
};
export const hasMasterAdminPersonalCardViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard.viewBlocked;
};

export const hasMasterAdminPersonalCardAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard.itemAdd;
};
export const hasMasterAdminPersonalCardEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard.itemUpdate;
};

export const hasMasterAdminPersonalCardDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard
    .itemDeleteImage;
};
export const hasMasterAdminPersonalCardFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard
    .itemFinaleDelete;
};

export const hasMasterAdminPersonalCardChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard
    .changeActivationType;
};
export const hasMasterAdminPersonalCardActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard.itemActive;
};
export const hasMasterAdminPersonalCardArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard.itemArchive;
};
export const hasMasterAdminPersonalCardBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminPersonalCard.itemBlocked;
};
//#endregion MasterAdminPersonalCard

//#region EmployeePersonalCard
export const hasEmployeePersonalCard = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.view;
};
export const hasEmployeePersonalCardViewActive = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.viewActive;
};
export const hasEmployeePersonalCardViewArchive = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.viewArchived;
};
export const hasEmployeePersonalCardViewBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.viewBlocked;
};

export const hasEmployeePersonalCardAdd = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.itemAdd;
};
export const hasEmployeePersonalCardEdit = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.itemUpdate;
};

export const hasEmployeePersonalCardDeleteImage = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.itemDeleteImage;
};
export const hasEmployeePersonalCardFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.itemFinaleDelete;
};

export const hasEmployeePersonalCardChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard
    .changeActivationType;
};
export const hasEmployeePersonalCardActive = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.itemActive;
};
export const hasEmployeePersonalCardArchive = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.itemArchive;
};
export const hasEmployeePersonalCardBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeePersonalCard.itemBlocked;
};
//#endregion EmployeePersonalCard

//#region StudentPersonalCard
export const hasStudentPersonalCard = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.view;
};
export const hasStudentPersonalCardViewActive = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.viewActive;
};
export const hasStudentPersonalCardViewArchive = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.viewArchived;
};
export const hasStudentPersonalCardViewBlocked = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.viewBlocked;
};

export const hasStudentPersonalCardAdd = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.itemAdd;
};
export const hasStudentPersonalCardEdit = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.itemUpdate;
};

export const hasStudentPersonalCardDeleteImage = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.itemDeleteImage;
};
export const hasStudentPersonalCardFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.itemFinaleDelete;
};

export const hasStudentPersonalCardChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard
    .changeActivationType;
};
export const hasStudentPersonalCardActive = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.itemActive;
};
export const hasStudentPersonalCardArchive = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.itemArchive;
};
export const hasStudentPersonalCardBlocked = () => {
  return store.getters.usersPrivilegeData.StudentPersonalCard.itemBlocked;
};
//#endregion StudentPersonalCard

//#region SupplierPersonalCard
export const hasSupplierPersonalCard = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.view;
};
export const hasSupplierPersonalCardViewActive = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.viewActive;
};
export const hasSupplierPersonalCardViewArchive = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.viewArchived;
};
export const hasSupplierPersonalCardViewBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.viewBlocked;
};

export const hasSupplierPersonalCardAdd = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.itemAdd;
};
export const hasSupplierPersonalCardEdit = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.itemUpdate;
};

export const hasSupplierPersonalCardDeleteImage = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.itemDeleteImage;
};
export const hasSupplierPersonalCardFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.itemFinaleDelete;
};

export const hasSupplierPersonalCardChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard
    .changeActivationType;
};
export const hasSupplierPersonalCardActive = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.itemActive;
};
export const hasSupplierPersonalCardArchive = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.itemArchive;
};
export const hasSupplierPersonalCardBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierPersonalCard.itemBlocked;
};
//#endregion SupplierPersonalCard

//#region ParentPersonalCard
export const hasParentPersonalCard = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.view;
};
export const hasParentPersonalCardViewActive = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.viewActive;
};
export const hasParentPersonalCardViewArchive = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.viewArchived;
};
export const hasParentPersonalCardViewBlocked = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.viewBlocked;
};

export const hasParentPersonalCardAdd = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.itemAdd;
};
export const hasParentPersonalCardEdit = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.itemUpdate;
};

export const hasParentPersonalCardDeleteImage = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.itemDeleteImage;
};
export const hasParentPersonalCardFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.itemFinaleDelete;
};

export const hasParentPersonalCardChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard
    .changeActivationType;
};
export const hasParentPersonalCardActive = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.itemActive;
};
export const hasParentPersonalCardArchive = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.itemArchive;
};
export const hasParentPersonalCardBlocked = () => {
  return store.getters.usersPrivilegeData.ParentPersonalCard.itemBlocked;
};
//#endregion ParentPersonalCard

//#region ClientPersonalCard
export const hasClientPersonalCard = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.view;
};
export const hasClientPersonalCardViewActive = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.viewActive;
};
export const hasClientPersonalCardViewArchive = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.viewArchived;
};
export const hasClientPersonalCardViewBlocked = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.viewBlocked;
};

export const hasClientPersonalCardAdd = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.itemAdd;
};
export const hasClientPersonalCardEdit = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.itemUpdate;
};

export const hasClientPersonalCardDeleteImage = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.itemDeleteImage;
};
export const hasClientPersonalCardFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.itemFinaleDelete;
};

export const hasClientPersonalCardChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard
    .changeActivationType;
};
export const hasClientPersonalCardActive = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.itemActive;
};
export const hasClientPersonalCardArchive = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.itemArchive;
};
export const hasClientPersonalCardBlocked = () => {
  return store.getters.usersPrivilegeData.ClientPersonalCard.itemBlocked;
};
//#endregion ClientPersonalCard

//#endregion UserPersonalCards

//#region UserTrainingCourses
//#region AdminsEgyptTrainingCourse
export const hasAdminsEgyptTrainingCourse = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse.view;
};
export const hasAdminsEgyptTrainingCourseViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse.viewActive;
};
export const hasAdminsEgyptTrainingCourseViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse
    .viewArchived;
};
export const hasAdminsEgyptTrainingCourseViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse.viewBlocked;
};

export const hasAdminsEgyptTrainingCourseAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse.itemAdd;
};
export const hasAdminsEgyptTrainingCourseEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse.itemUpdate;
};

export const hasAdminsEgyptTrainingCourseDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse
    .itemDeleteImage;
};
export const hasAdminsEgyptTrainingCourseFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse
    .itemFinaleDelete;
};

export const hasAdminsEgyptTrainingCourseChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse
    .changeActivationType;
};
export const hasAdminsEgyptTrainingCourseActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse.itemActive;
};
export const hasAdminsEgyptTrainingCourseArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse.itemArchive;
};
export const hasAdminsEgyptTrainingCourseBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptTrainingCourse.itemBlocked;
};
//#endregion AdminsEgyptTrainingCourse

//#region MasterAdminTrainingCourse
export const hasMasterAdminTrainingCourse = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse.view;
};
export const hasMasterAdminTrainingCourseViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse.viewActive;
};
export const hasMasterAdminTrainingCourseViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse
    .viewArchived;
};
export const hasMasterAdminTrainingCourseViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse.viewBlocked;
};

export const hasMasterAdminTrainingCourseAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse.itemAdd;
};
export const hasMasterAdminTrainingCourseEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse.itemUpdate;
};

export const hasMasterAdminTrainingCourseDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse
    .itemDeleteImage;
};
export const hasMasterAdminTrainingCourseFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse
    .itemFinaleDelete;
};

export const hasMasterAdminTrainingCourseChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse
    .changeActivationType;
};
export const hasMasterAdminTrainingCourseActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse.itemActive;
};
export const hasMasterAdminTrainingCourseArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse.itemArchive;
};
export const hasMasterAdminTrainingCourseBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminTrainingCourse.itemBlocked;
};
//#endregion MasterAdminTrainingCourse

//#region EmployeeTrainingCourse
export const hasEmployeeTrainingCourse = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse.view;
};
export const hasEmployeeTrainingCourseViewActive = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse.viewActive;
};
export const hasEmployeeTrainingCourseViewArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse.viewArchived;
};
export const hasEmployeeTrainingCourseViewBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse.viewBlocked;
};

export const hasEmployeeTrainingCourseAdd = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse.itemAdd;
};
export const hasEmployeeTrainingCourseEdit = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse.itemUpdate;
};

export const hasEmployeeTrainingCourseDeleteImage = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse
    .itemDeleteImage;
};
export const hasEmployeeTrainingCourseFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse
    .itemFinaleDelete;
};

export const hasEmployeeTrainingCourseChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse
    .changeActivationType;
};
export const hasEmployeeTrainingCourseActive = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse.itemActive;
};
export const hasEmployeeTrainingCourseArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse.itemArchive;
};
export const hasEmployeeTrainingCourseBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeTrainingCourse.itemBlocked;
};
//#endregion EmployeeTrainingCourse

//#region StudentTrainingCourse
export const hasStudentTrainingCourse = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.view;
};
export const hasStudentTrainingCourseViewActive = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.viewActive;
};
export const hasStudentTrainingCourseViewArchive = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.viewArchived;
};
export const hasStudentTrainingCourseViewBlocked = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.viewBlocked;
};

export const hasStudentTrainingCourseAdd = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.itemAdd;
};
export const hasStudentTrainingCourseEdit = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.itemUpdate;
};

export const hasStudentTrainingCourseDeleteImage = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.itemDeleteImage;
};
export const hasStudentTrainingCourseFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse
    .itemFinaleDelete;
};

export const hasStudentTrainingCourseChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse
    .changeActivationType;
};
export const hasStudentTrainingCourseActive = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.itemActive;
};
export const hasStudentTrainingCourseArchive = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.itemArchive;
};
export const hasStudentTrainingCourseBlocked = () => {
  return store.getters.usersPrivilegeData.StudentTrainingCourse.itemBlocked;
};
//#endregion StudentTrainingCourse

//#region SupplierTrainingCourse
export const hasSupplierTrainingCourse = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse.view;
};
export const hasSupplierTrainingCourseViewActive = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse.viewActive;
};
export const hasSupplierTrainingCourseViewArchive = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse.viewArchived;
};
export const hasSupplierTrainingCourseViewBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse.viewBlocked;
};

export const hasSupplierTrainingCourseAdd = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse.itemAdd;
};
export const hasSupplierTrainingCourseEdit = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse.itemUpdate;
};

export const hasSupplierTrainingCourseDeleteImage = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse
    .itemDeleteImage;
};
export const hasSupplierTrainingCourseFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse
    .itemFinaleDelete;
};

export const hasSupplierTrainingCourseChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse
    .changeActivationType;
};
export const hasSupplierTrainingCourseActive = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse.itemActive;
};
export const hasSupplierTrainingCourseArchive = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse.itemArchive;
};
export const hasSupplierTrainingCourseBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierTrainingCourse.itemBlocked;
};
//#endregion SupplierTrainingCourse

//#region ParentTrainingCourse
export const hasParentTrainingCourse = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.view;
};
export const hasParentTrainingCourseViewActive = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.viewActive;
};
export const hasParentTrainingCourseViewArchive = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.viewArchived;
};
export const hasParentTrainingCourseViewBlocked = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.viewBlocked;
};

export const hasParentTrainingCourseAdd = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.itemAdd;
};
export const hasParentTrainingCourseEdit = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.itemUpdate;
};

export const hasParentTrainingCourseDeleteImage = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.itemDeleteImage;
};
export const hasParentTrainingCourseFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.itemFinaleDelete;
};

export const hasParentTrainingCourseChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse
    .changeActivationType;
};
export const hasParentTrainingCourseActive = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.itemActive;
};
export const hasParentTrainingCourseArchive = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.itemArchive;
};
export const hasParentTrainingCourseBlocked = () => {
  return store.getters.usersPrivilegeData.ParentTrainingCourse.itemBlocked;
};
//#endregion ParentTrainingCourse

//#region ClientTrainingCourse
export const hasClientTrainingCourse = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.view;
};
export const hasClientTrainingCourseViewActive = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.viewActive;
};
export const hasClientTrainingCourseViewArchive = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.viewArchived;
};
export const hasClientTrainingCourseViewBlocked = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.viewBlocked;
};

export const hasClientTrainingCourseAdd = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.itemAdd;
};
export const hasClientTrainingCourseEdit = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.itemUpdate;
};

export const hasClientTrainingCourseDeleteImage = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.itemDeleteImage;
};
export const hasClientTrainingCourseFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.itemFinaleDelete;
};

export const hasClientTrainingCourseChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse
    .changeActivationType;
};
export const hasClientTrainingCourseActive = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.itemActive;
};
export const hasClientTrainingCourseArchive = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.itemArchive;
};
export const hasClientTrainingCourseBlocked = () => {
  return store.getters.usersPrivilegeData.ClientTrainingCourse.itemBlocked;
};
//#endregion ClientTrainingCourse

//#endregion UserTrainingCourses

//#region UserExperiences
//#region AdminsEgyptExperience
export const hasAdminsEgyptExperience = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.view;
};
export const hasAdminsEgyptExperienceViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.viewActive;
};
export const hasAdminsEgyptExperienceViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.viewArchived;
};
export const hasAdminsEgyptExperienceViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.viewBlocked;
};

export const hasAdminsEgyptExperienceAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.itemAdd;
};
export const hasAdminsEgyptExperienceEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.itemUpdate;
};

export const hasAdminsEgyptExperienceDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.itemDeleteImage;
};
export const hasAdminsEgyptExperienceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience
    .itemFinaleDelete;
};

export const hasAdminsEgyptExperienceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience
    .changeActivationType;
};
export const hasAdminsEgyptExperienceActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.itemActive;
};
export const hasAdminsEgyptExperienceArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.itemArchive;
};
export const hasAdminsEgyptExperienceBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptExperience.itemBlocked;
};
//#endregion AdminsEgyptExperience

//#region MasterAdminExperience
export const hasMasterAdminExperience = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.view;
};
export const hasMasterAdminExperienceViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.viewActive;
};
export const hasMasterAdminExperienceViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.viewArchived;
};
export const hasMasterAdminExperienceViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.viewBlocked;
};

export const hasMasterAdminExperienceAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.itemAdd;
};
export const hasMasterAdminExperienceEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.itemUpdate;
};

export const hasMasterAdminExperienceDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.itemDeleteImage;
};
export const hasMasterAdminExperienceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience
    .itemFinaleDelete;
};

export const hasMasterAdminExperienceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience
    .changeActivationType;
};
export const hasMasterAdminExperienceActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.itemActive;
};
export const hasMasterAdminExperienceArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.itemArchive;
};
export const hasMasterAdminExperienceBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminExperience.itemBlocked;
};
//#endregion MasterAdminExperience

//#region EmployeeExperience
export const hasEmployeeExperience = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.view;
};
export const hasEmployeeExperienceViewActive = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.viewActive;
};
export const hasEmployeeExperienceViewArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.viewArchived;
};
export const hasEmployeeExperienceViewBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.viewBlocked;
};

export const hasEmployeeExperienceAdd = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.itemAdd;
};
export const hasEmployeeExperienceEdit = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.itemUpdate;
};

export const hasEmployeeExperienceDeleteImage = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.itemDeleteImage;
};
export const hasEmployeeExperienceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.itemFinaleDelete;
};

export const hasEmployeeExperienceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience
    .changeActivationType;
};
export const hasEmployeeExperienceActive = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.itemActive;
};
export const hasEmployeeExperienceArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.itemArchive;
};
export const hasEmployeeExperienceBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeExperience.itemBlocked;
};
//#endregion EmployeeExperience

//#region StudentExperience
export const hasStudentExperience = () => {
  return store.getters.usersPrivilegeData.StudentExperience.view;
};
export const hasStudentExperienceViewActive = () => {
  return store.getters.usersPrivilegeData.StudentExperience.viewActive;
};
export const hasStudentExperienceViewArchive = () => {
  return store.getters.usersPrivilegeData.StudentExperience.viewArchived;
};
export const hasStudentExperienceViewBlocked = () => {
  return store.getters.usersPrivilegeData.StudentExperience.viewBlocked;
};

export const hasStudentExperienceAdd = () => {
  return store.getters.usersPrivilegeData.StudentExperience.itemAdd;
};
export const hasStudentExperienceEdit = () => {
  return store.getters.usersPrivilegeData.StudentExperience.itemUpdate;
};

export const hasStudentExperienceDeleteImage = () => {
  return store.getters.usersPrivilegeData.StudentExperience.itemDeleteImage;
};
export const hasStudentExperienceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StudentExperience.itemFinaleDelete;
};

export const hasStudentExperienceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StudentExperience
    .changeActivationType;
};
export const hasStudentExperienceActive = () => {
  return store.getters.usersPrivilegeData.StudentExperience.itemActive;
};
export const hasStudentExperienceArchive = () => {
  return store.getters.usersPrivilegeData.StudentExperience.itemArchive;
};
export const hasStudentExperienceBlocked = () => {
  return store.getters.usersPrivilegeData.StudentExperience.itemBlocked;
};
//#endregion StudentExperience

//#region SupplierExperience
export const hasSupplierExperience = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.view;
};
export const hasSupplierExperienceViewActive = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.viewActive;
};
export const hasSupplierExperienceViewArchive = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.viewArchived;
};
export const hasSupplierExperienceViewBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.viewBlocked;
};

export const hasSupplierExperienceAdd = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.itemAdd;
};
export const hasSupplierExperienceEdit = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.itemUpdate;
};

export const hasSupplierExperienceDeleteImage = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.itemDeleteImage;
};
export const hasSupplierExperienceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.itemFinaleDelete;
};

export const hasSupplierExperienceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SupplierExperience
    .changeActivationType;
};
export const hasSupplierExperienceActive = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.itemActive;
};
export const hasSupplierExperienceArchive = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.itemArchive;
};
export const hasSupplierExperienceBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierExperience.itemBlocked;
};
//#endregion SupplierExperience

//#region ParentExperience
export const hasParentExperience = () => {
  return store.getters.usersPrivilegeData.ParentExperience.view;
};
export const hasParentExperienceViewActive = () => {
  return store.getters.usersPrivilegeData.ParentExperience.viewActive;
};
export const hasParentExperienceViewArchive = () => {
  return store.getters.usersPrivilegeData.ParentExperience.viewArchived;
};
export const hasParentExperienceViewBlocked = () => {
  return store.getters.usersPrivilegeData.ParentExperience.viewBlocked;
};

export const hasParentExperienceAdd = () => {
  return store.getters.usersPrivilegeData.ParentExperience.itemAdd;
};
export const hasParentExperienceEdit = () => {
  return store.getters.usersPrivilegeData.ParentExperience.itemUpdate;
};

export const hasParentExperienceDeleteImage = () => {
  return store.getters.usersPrivilegeData.ParentExperience.itemDeleteImage;
};
export const hasParentExperienceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ParentExperience.itemFinaleDelete;
};

export const hasParentExperienceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ParentExperience.changeActivationType;
};
export const hasParentExperienceActive = () => {
  return store.getters.usersPrivilegeData.ParentExperience.itemActive;
};
export const hasParentExperienceArchive = () => {
  return store.getters.usersPrivilegeData.ParentExperience.itemArchive;
};
export const hasParentExperienceBlocked = () => {
  return store.getters.usersPrivilegeData.ParentExperience.itemBlocked;
};
//#endregion ParentExperience

//#region ClientExperience
export const hasClientExperience = () => {
  return store.getters.usersPrivilegeData.ClientExperience.view;
};
export const hasClientExperienceViewActive = () => {
  return store.getters.usersPrivilegeData.ClientExperience.viewActive;
};
export const hasClientExperienceViewArchive = () => {
  return store.getters.usersPrivilegeData.ClientExperience.viewArchived;
};
export const hasClientExperienceViewBlocked = () => {
  return store.getters.usersPrivilegeData.ClientExperience.viewBlocked;
};

export const hasClientExperienceAdd = () => {
  return store.getters.usersPrivilegeData.ClientExperience.itemAdd;
};
export const hasClientExperienceEdit = () => {
  return store.getters.usersPrivilegeData.ClientExperience.itemUpdate;
};

export const hasClientExperienceDeleteImage = () => {
  return store.getters.usersPrivilegeData.ClientExperience.itemDeleteImage;
};
export const hasClientExperienceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ClientExperience.itemFinaleDelete;
};

export const hasClientExperienceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ClientExperience.changeActivationType;
};
export const hasClientExperienceActive = () => {
  return store.getters.usersPrivilegeData.ClientExperience.itemActive;
};
export const hasClientExperienceArchive = () => {
  return store.getters.usersPrivilegeData.ClientExperience.itemArchive;
};
export const hasClientExperienceBlocked = () => {
  return store.getters.usersPrivilegeData.ClientExperience.itemBlocked;
};
//#endregion ClientExperience

//#endregion UserExperiences

//#region Notifications
export const hasNotification = () => {
  try {
    return store.getters.usersPrivilegeData.Notification.notificationView;
  } catch (error) {
    return false;
  }
};
export const hasNotificationRead = () => {
  try {
    return store.getters.usersPrivilegeData.Notification.notificationRead;
  } catch (error) {
    return false;
  }
};
export const hasNotificationOpen = () => {
  try {
    return store.getters.usersPrivilegeData.Notification.notificationOpen;
  } catch (error) {
    return false;
  }
};

//#endregion Notifications

//#region Newss
export const hasNews = () => {
  try {
    return store.getters.usersPrivilegeData.News.view;
  } catch (error) {
    return false;
  }
};
export const hasNewsViewActive = () => {
  return store.getters.usersPrivilegeData.News.viewActive;
};
export const hasNewsViewArchive = () => {
  return store.getters.usersPrivilegeData.News.viewArchived;
};
export const hasNewsViewBlocked = () => {
  return store.getters.usersPrivilegeData.News.viewBlocked;
};

export const hasNewsAdd = () => {
  return store.getters.usersPrivilegeData.News.itemAdd;
};
export const hasNewsEdit = () => {
  return store.getters.usersPrivilegeData.News.itemUpdate;
};

export const hasNewsDeleteImage = () => {
  return store.getters.usersPrivilegeData.News.itemDeleteImage;
};
export const hasNewsFinaleDelete = () => {
  return store.getters.usersPrivilegeData.News.itemFinaleDelete;
};

export const hasNewsChangeActivationType = () => {
  return store.getters.usersPrivilegeData.News.changeActivationType;
};
export const hasNewsActive = () => {
  return store.getters.usersPrivilegeData.News.itemActive;
};
export const hasNewsArchive = () => {
  return store.getters.usersPrivilegeData.News.itemArchive;
};
export const hasNewsBlocked = () => {
  return store.getters.usersPrivilegeData.News.itemBlocked;
};
//#endregion Newss

//#region Finance
export const hasFinance = () => {
  return (
    hasAccount() ||
    hasAccountTransaction() ||
    hasCountedServiceTransaction() ||
    hasExpense() ||
    hasRevenue() ||
    hasDebt() ||
    hasInstallment() ||
    hasInstallmentPayment() ||
    hasServiceEntitlement()
  );
};

//#region Accounts
export const hasAccount = () => {
  return store.getters.usersPrivilegeData.Account.view;
};
export const hasAccountViewActive = () => {
  return store.getters.usersPrivilegeData.Account.viewActive;
};
export const hasAccountViewArchive = () => {
  return store.getters.usersPrivilegeData.Account.viewArchived;
};
export const hasAccountViewBlocked = () => {
  return store.getters.usersPrivilegeData.Account.viewBlocked;
};

export const hasAccountAdd = () => {
  return store.getters.usersPrivilegeData.Account.itemAdd;
};
export const hasAccountEdit = () => {
  return store.getters.usersPrivilegeData.Account.itemUpdate;
};

export const hasAccountDeleteImage = () => {
  return store.getters.usersPrivilegeData.Account.itemDeleteImage;
};
export const hasAccountFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Account.itemFinaleDelete;
};

export const hasAccountChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Account.changeActivationType;
};
export const hasAccountActive = () => {
  return store.getters.usersPrivilegeData.Account.itemActive;
};
export const hasAccountArchive = () => {
  return store.getters.usersPrivilegeData.Account.itemArchive;
};
export const hasAccountBlocked = () => {
  return store.getters.usersPrivilegeData.Account.itemBlocked;
};
//#endregion Accounts

//#region AccountTransactions
export const hasAccountTransaction = () => {
  return store.getters.usersPrivilegeData.AccountTransaction.view;
};
export const hasAccountTransactionReport = () => {
  try {
    return store.getters.usersPrivilegeData.AccountTransaction.viewReport;
  } catch (error) {
    return false;
  }
};

export const hasAccountTransactionAdd = () => {
  return hasAccountTransactionDepositing() || hasAccountTransactionDropdown();
};
export const hasAccountTransactionDepositing = () => {
  return store.getters.usersPrivilegeData.AccountTransaction
    .accountTransactionDeposit;
};
export const hasAccountTransactionDropdown = () => {
  return store.getters.usersPrivilegeData.AccountTransaction
    .accountTransactionDropdown;
};

//#endregion AccountTransactions

//#region CountedServiceTransactions
export const hasCountedServiceTransaction = () => {
  return (
    hasCountedServiceTransactionViewBuy() ||
    hasCountedServiceTransactionViewSell() ||
    hasCountedServiceTransactionViewRefund()
  );
};
export const hasCountedServiceTransactionViewBuy = () => {
  try {
    return store.getters.usersPrivilegeData.CountedServiceTransaction
      .countedServiceTransactionViewBuy;
  } catch (error) {
    return false;
  }
};
export const hasCountedServiceTransactionViewSell = () => {
  try {
    return store.getters.usersPrivilegeData.CountedServiceTransaction
      .countedServiceTransactionViewSell;
  } catch (error) {
    return false;
  }
};
export const hasCountedServiceTransactionViewRefund = () => {
  try {
    return store.getters.usersPrivilegeData.CountedServiceTransaction
      .countedServiceTransactionViewRefund;
  } catch (error) {
    return false;
  }
};

export const hasCountedServiceTransactionMakeAction = () => {
  return (
    hasCountedServiceTransactionBuy() || hasCountedServiceTransactionSell()
  );
};

export const hasCountedServiceTransactionBuy = () => {
  return store.getters.usersPrivilegeData.CountedServiceTransaction
    .countedServiceTransactionBuy;
};

export const hasCountedServiceTransactionSell = () => {
  return store.getters.usersPrivilegeData.CountedServiceTransaction
    .countedServiceTransactionSell;
};

export const hasCountedServiceTransactionRefund = () => {
  return store.getters.usersPrivilegeData.CountedServiceTransaction
    .countedServiceTransactionRefund;
};

export const hasCountedServiceTransactionDeleteImage = () => {
  return store.getters.usersPrivilegeData.CountedServiceTransaction
    .itemDeleteImage;
};
//#endregion CountedServiceTransactions

//#region Expenses
export const hasExpense = () => {
  return store.getters.usersPrivilegeData.Expenses.view;
};

export const hasExpensePay = () => {
  return store.getters.usersPrivilegeData.Expenses.payExpenses;
};
export const hasExpenseRefund = () => {
  return store.getters.usersPrivilegeData.Expenses.refundExpenses;
};

export const hasExpenseDeleteImage = () => {
  return store.getters.usersPrivilegeData.Expenses.itemDeleteImage;
};

//#endregion Expenses

//#region Revenues
export const hasRevenue = () => {
  return store.getters.usersPrivilegeData.Revenues.view;
};

export const hasRevenueAccrual = () => {
  return store.getters.usersPrivilegeData.Revenues.accrualRevenues;
};
export const hasRevenueRefund = () => {
  return store.getters.usersPrivilegeData.Revenues.refundRevenues;
};

export const hasRevenueDeleteImage = () => {
  return store.getters.usersPrivilegeData.Revenues.itemDeleteImage;
};

//#endregion Revenues

//#region Debts
export const hasDebt = () => {
  try {
    return store.getters.usersPrivilegeData.Debt.view;
  } catch (error) {
    return false;
  }
};

//#endregion Debts

//#region Installments
export const hasInstallment = () => {
  try {
    return store.getters.usersPrivilegeData.Installment.view;
  } catch (error) {
    return false;
  }
};
export const hasInstallmentReport = () => {
  try {
    return store.getters.usersPrivilegeData.InstallmentSchedule.viewReport;
  } catch (error) {
    return false;
  }
};

export const hasInstallmentAdd = () => {
  return store.getters.usersPrivilegeData.Installment.itemAdd;
};
export const hasInstallmentEdit = () => {
  return store.getters.usersPrivilegeData.Installment.itemUpdate;
};

export const hasInstallmentDeleteImage = () => {
  return store.getters.usersPrivilegeData.Installment.itemDeleteImage;
};
export const hasInstallmentCancel = () => {
  return store.getters.usersPrivilegeData.Installment.itemFinaleDelete;
};

//#endregion Installments

//#region InstallmentPayments
export const hasInstallmentPayment = () => {
  try {
    return store.getters.usersPrivilegeData.InstallmentPayment.view;
  } catch (error) {
    return false;
  }
};

export const hasInstallmentPaymentAdd = () => {
  return store.getters.usersPrivilegeData.InstallmentPayment.addPayments;
};
export const hasInstallmentPaymentRefund = () => {
  return store.getters.usersPrivilegeData.InstallmentPayment.refundPayments;
};

export const hasInstallmentPaymentDeleteImage = () => {
  try {
    return store.getters.usersPrivilegeData.InstallmentPayment.itemDeleteImage;
  } catch (error) {
    return false;
  }
};

//#endregion InstallmentPayments

//#region ServiceEntitlements
export const hasServiceEntitlement = () => {
  try {
    return store.getters.usersPrivilegeData.ServiceEntitlement.view;
  } catch (error) {
    return false;
  }
};

export const hasServiceEntitlementAddServiceEntitlementAsDept = () => {
  try {
    return store.getters.usersPrivilegeData.ServiceEntitlement
      .accrualServiceEntitlement;
  } catch (error) {
    return false;
  }
};

export const hasServiceEntitlementAccrual = () => {
  return store.getters.usersPrivilegeData.ServiceEntitlement
    .accrualServiceEntitlement;
};
export const hasServiceEntitlementRefund = () => {
  return store.getters.usersPrivilegeData.ServiceEntitlement
    .refundServiceEntitlement;
};

export const hasServiceEntitlementDeleteImage = () => {
  return store.getters.usersPrivilegeData.ServiceEntitlement.itemDeleteImage;
};

//#endregion ServiceEntitlements

//#endregion Finance

//#region Alerts
export const hasAlerts = () => {
  try {
    return hasComplaint() || hasReminder();
  } catch (error) {
    return false;
  }
};

//#region Complaints
export const hasComplaint = () => {
  try {
    return store.getters.usersPrivilegeData.Complaint.view;
  } catch (error) {
    return false;
  }
};
export const hasComplaintReport = () => {
  try {
    return store.getters.usersPrivilegeData.Complaint.viewReport;
  } catch (error) {
    return false;
  }
};
export const hasComplaintViewActive = () => {
  return store.getters.usersPrivilegeData.Complaint.viewActive;
};
export const hasComplaintViewArchive = () => {
  return store.getters.usersPrivilegeData.Complaint.viewArchived;
};
export const hasComplaintViewBlocked = () => {
  return store.getters.usersPrivilegeData.Complaint.viewBlocked;
};

export const hasComplaintAdd = () => {
  return store.getters.usersPrivilegeData.Complaint.itemAdd;
};
export const hasComplaintEdit = () => {
  return store.getters.usersPrivilegeData.Complaint.itemUpdate;
};

export const hasCloseComplaint = () => {
  return store.getters.usersPrivilegeData.Complaint.closeComplaint;
};

export const hasComplaintDeleteImage = () => {
  return store.getters.usersPrivilegeData.Complaint.itemDeleteImage;
};
export const hasComplaintFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Complaint.itemFinaleDelete;
};

export const hasComplaintChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Complaint.changeActivationType;
};
export const hasComplaintActive = () => {
  return store.getters.usersPrivilegeData.Complaint.itemActive;
};
export const hasComplaintArchive = () => {
  return store.getters.usersPrivilegeData.Complaint.itemArchive;
};
export const hasComplaintBlocked = () => {
  return store.getters.usersPrivilegeData.Complaint.itemBlocked;
};
//#endregion Complaints

//#region Reminders
export const hasReminder = () => {
  try {
    return store.getters.usersPrivilegeData.Reminder.view;
  } catch (error) {
    return false;
  }
};
export const hasReminderViewActive = () => {
  return store.getters.usersPrivilegeData.Reminder.viewActive;
};
export const hasReminderViewArchive = () => {
  return store.getters.usersPrivilegeData.Reminder.viewArchived;
};
export const hasReminderViewBlocked = () => {
  return store.getters.usersPrivilegeData.Reminder.viewBlocked;
};

export const hasReminderAdd = () => {
  return store.getters.usersPrivilegeData.Reminder.itemAdd;
};
export const hasReminderEdit = () => {
  return store.getters.usersPrivilegeData.Reminder.itemUpdate;
};

export const hasReminderDeleteImage = () => {
  return store.getters.usersPrivilegeData.Reminder.itemDeleteImage;
};
export const hasReminderFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Reminder.itemFinaleDelete;
};

export const hasReminderChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Reminder.changeActivationType;
};
export const hasReminderActive = () => {
  return store.getters.usersPrivilegeData.Reminder.itemActive;
};
export const hasReminderArchive = () => {
  return store.getters.usersPrivilegeData.Reminder.itemArchive;
};
export const hasReminderBlocked = () => {
  return store.getters.usersPrivilegeData.Reminder.itemBlocked;
};
//#endregion Reminders

//#endregion Alerts

//#region ComplaintFollowUps
export const hasComplaintFollowUp = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.view;
};
export const hasComplaintFollowUpViewActive = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.viewActive;
};
export const hasComplaintFollowUpViewArchive = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.viewArchived;
};
export const hasComplaintFollowUpViewBlocked = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.viewBlocked;
};

export const hasComplaintFollowUpAdd = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.itemAdd;
};
export const hasComplaintFollowUpEdit = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.itemUpdate;
};

export const hasComplaintFollowUpDeleteImage = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.itemDeleteImage;
};
export const hasComplaintFollowUpFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.itemFinaleDelete;
};

export const hasComplaintFollowUpChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp
    .changeActivationType;
};
export const hasComplaintFollowUpActive = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.itemActive;
};
export const hasComplaintFollowUpArchive = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.itemArchive;
};
export const hasComplaintFollowUpBlocked = () => {
  return store.getters.usersPrivilegeData.ComplaintFollowUp.itemBlocked;
};
//#endregion ComplaintFollowUps

//#region StorageSpaces

//#region StorageSpaceAdminsEgypt
export const hasStorageSpaceAdminsEgypt = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt.view;
};
export const hasStorageSpaceAdminsEgyptViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt.viewActive;
};
export const hasStorageSpaceAdminsEgyptViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt.viewArchived;
};
export const hasStorageSpaceAdminsEgyptViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt.viewBlocked;
};

export const hasStorageSpaceAdminsEgyptAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt.itemAdd;
};
export const hasStorageSpaceAdminsEgyptEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt.itemUpdate;
};

export const hasStorageSpaceAdminsEgyptDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt
    .itemDeleteImage;
};
export const hasStorageSpaceAdminsEgyptFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt
    .itemFinaleDelete;
};

export const hasStorageSpaceAdminsEgyptChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt
    .changeActivationType;
};
export const hasStorageSpaceAdminsEgyptActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt.itemActive;
};
export const hasStorageSpaceAdminsEgyptArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt.itemArchive;
};
export const hasStorageSpaceAdminsEgyptBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceAdminsEgypt.itemBlocked;
};
//#endregion StorageSpaceAdminsEgypt

//#region StorageSpaceMasterAdmin
export const hasStorageSpaceMasterAdmin = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin.view;
};
export const hasStorageSpaceMasterAdminViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin.viewActive;
};
export const hasStorageSpaceMasterAdminViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin.viewArchived;
};
export const hasStorageSpaceMasterAdminViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin.viewBlocked;
};

export const hasStorageSpaceMasterAdminAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin.itemAdd;
};
export const hasStorageSpaceMasterAdminEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin.itemUpdate;
};

export const hasStorageSpaceMasterAdminDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin
    .itemDeleteImage;
};
export const hasStorageSpaceMasterAdminFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin
    .itemFinaleDelete;
};

export const hasStorageSpaceMasterAdminChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin
    .changeActivationType;
};
export const hasStorageSpaceMasterAdminActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin.itemActive;
};
export const hasStorageSpaceMasterAdminArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin.itemArchive;
};
export const hasStorageSpaceMasterAdminBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMasterAdmin.itemBlocked;
};
//#endregion StorageSpaceMasterAdmin

//#region StorageSpaceEmployee
export const hasStorageSpaceEmployee = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.view;
};
export const hasStorageSpaceEmployeeViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.viewActive;
};
export const hasStorageSpaceEmployeeViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.viewArchived;
};
export const hasStorageSpaceEmployeeViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.viewBlocked;
};

export const hasStorageSpaceEmployeeAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.itemAdd;
};
export const hasStorageSpaceEmployeeEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.itemUpdate;
};

export const hasStorageSpaceEmployeeDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.itemDeleteImage;
};
export const hasStorageSpaceEmployeeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.itemFinaleDelete;
};

export const hasStorageSpaceEmployeeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee
    .changeActivationType;
};
export const hasStorageSpaceEmployeeActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.itemActive;
};
export const hasStorageSpaceEmployeeArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.itemArchive;
};
export const hasStorageSpaceEmployeeBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEmployee.itemBlocked;
};
//#endregion StorageSpaceEmployee

//#region StorageSpaceStudent
export const hasStorageSpaceStudent = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.view;
};
export const hasStorageSpaceStudentViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.viewActive;
};
export const hasStorageSpaceStudentViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.viewArchived;
};
export const hasStorageSpaceStudentViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.viewBlocked;
};

export const hasStorageSpaceStudentAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.itemAdd;
};
export const hasStorageSpaceStudentEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.itemUpdate;
};

export const hasStorageSpaceStudentDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.itemDeleteImage;
};
export const hasStorageSpaceStudentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.itemFinaleDelete;
};

export const hasStorageSpaceStudentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent
    .changeActivationType;
};
export const hasStorageSpaceStudentActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.itemActive;
};
export const hasStorageSpaceStudentArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.itemArchive;
};
export const hasStorageSpaceStudentBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceStudent.itemBlocked;
};
//#endregion StorageSpaceStudent

//#region StorageSpaceSupplier
export const hasStorageSpaceSupplier = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.view;
};
export const hasStorageSpaceSupplierViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.viewActive;
};
export const hasStorageSpaceSupplierViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.viewArchived;
};
export const hasStorageSpaceSupplierViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.viewBlocked;
};

export const hasStorageSpaceSupplierAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.itemAdd;
};
export const hasStorageSpaceSupplierEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.itemUpdate;
};

export const hasStorageSpaceSupplierDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.itemDeleteImage;
};
export const hasStorageSpaceSupplierFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.itemFinaleDelete;
};

export const hasStorageSpaceSupplierChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier
    .changeActivationType;
};
export const hasStorageSpaceSupplierActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.itemActive;
};
export const hasStorageSpaceSupplierArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.itemArchive;
};
export const hasStorageSpaceSupplierBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceSupplier.itemBlocked;
};
//#endregion StorageSpaceSupplier

//#region StorageSpaceParent
export const hasStorageSpaceParent = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.view;
};
export const hasStorageSpaceParentViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.viewActive;
};
export const hasStorageSpaceParentViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.viewArchived;
};
export const hasStorageSpaceParentViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.viewBlocked;
};

export const hasStorageSpaceParentAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.itemAdd;
};
export const hasStorageSpaceParentEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.itemUpdate;
};

export const hasStorageSpaceParentDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.itemDeleteImage;
};
export const hasStorageSpaceParentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.itemFinaleDelete;
};

export const hasStorageSpaceParentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent
    .changeActivationType;
};
export const hasStorageSpaceParentActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.itemActive;
};
export const hasStorageSpaceParentArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.itemArchive;
};
export const hasStorageSpaceParentBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceParent.itemBlocked;
};
//#endregion StorageSpaceParent

//#region StorageSpaceClient
export const hasStorageSpaceClient = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.view;
};
export const hasStorageSpaceClientViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.viewActive;
};
export const hasStorageSpaceClientViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.viewArchived;
};
export const hasStorageSpaceClientViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.viewBlocked;
};

export const hasStorageSpaceClientAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.itemAdd;
};
export const hasStorageSpaceClientEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.itemUpdate;
};

export const hasStorageSpaceClientDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.itemDeleteImage;
};
export const hasStorageSpaceClientFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.itemFinaleDelete;
};

export const hasStorageSpaceClientChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient
    .changeActivationType;
};
export const hasStorageSpaceClientActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.itemActive;
};
export const hasStorageSpaceClientArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.itemArchive;
};
export const hasStorageSpaceClientBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceClient.itemBlocked;
};
//#endregion StorageSpaceClient

//#region StorageSpacePlaceMasterAdmin
export const hasStorageSpacePlaceMasterAdmin = () => {
  try {
    return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin.view;
  } catch (error) {
    return false;
  }
};
export const hasStorageSpacePlaceMasterAdminViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .viewActive;
};
export const hasStorageSpacePlaceMasterAdminViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .viewArchived;
};
export const hasStorageSpacePlaceMasterAdminViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .viewBlocked;
};

export const hasStorageSpacePlaceMasterAdminAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin.itemAdd;
};
export const hasStorageSpacePlaceMasterAdminEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .itemUpdate;
};

export const hasStorageSpacePlaceMasterAdminDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .itemDeleteImage;
};
export const hasStorageSpacePlaceMasterAdminFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .itemFinaleDelete;
};

export const hasStorageSpacePlaceMasterAdminChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .changeActivationType;
};
export const hasStorageSpacePlaceMasterAdminActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .itemActive;
};
export const hasStorageSpacePlaceMasterAdminArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .itemArchive;
};
export const hasStorageSpacePlaceMasterAdminBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceMasterAdmin
    .itemBlocked;
};
//#endregion StorageSpacePlaceMasterAdmin

//#region StorageSpacePlaceEmployee
export const hasStorageSpacePlaceEmployee = () => {
  try {
    return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee.view;
  } catch (error) {
    return false;
  }
};
export const hasStorageSpacePlaceEmployeeViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee.viewActive;
};
export const hasStorageSpacePlaceEmployeeViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee
    .viewArchived;
};
export const hasStorageSpacePlaceEmployeeViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee.viewBlocked;
};

export const hasStorageSpacePlaceEmployeeAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee.itemAdd;
};
export const hasStorageSpacePlaceEmployeeEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee.itemUpdate;
};

export const hasStorageSpacePlaceEmployeeDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee
    .itemDeleteImage;
};
export const hasStorageSpacePlaceEmployeeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee
    .itemFinaleDelete;
};

export const hasStorageSpacePlaceEmployeeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee
    .changeActivationType;
};
export const hasStorageSpacePlaceEmployeeActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee.itemActive;
};
export const hasStorageSpacePlaceEmployeeArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee.itemArchive;
};
export const hasStorageSpacePlaceEmployeeBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceEmployee.itemBlocked;
};
//#endregion StorageSpacePlaceEmployee

//#region StorageSpacePlaceStudent
export const hasStorageSpacePlaceStudent = () => {
  try {
    return store.getters.usersPrivilegeData.StorageSpacePlaceStudent.view;
  } catch (error) {
    return false;
  }
};
export const hasStorageSpacePlaceStudentViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent.viewActive;
};
export const hasStorageSpacePlaceStudentViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent.viewArchived;
};
export const hasStorageSpacePlaceStudentViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent.viewBlocked;
};

export const hasStorageSpacePlaceStudentAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent.itemAdd;
};
export const hasStorageSpacePlaceStudentEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent.itemUpdate;
};

export const hasStorageSpacePlaceStudentDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent
    .itemDeleteImage;
};
export const hasStorageSpacePlaceStudentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent
    .itemFinaleDelete;
};

export const hasStorageSpacePlaceStudentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent
    .changeActivationType;
};
export const hasStorageSpacePlaceStudentActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent.itemActive;
};
export const hasStorageSpacePlaceStudentArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent.itemArchive;
};
export const hasStorageSpacePlaceStudentBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceStudent.itemBlocked;
};
//#endregion StorageSpacePlaceStudent

//#region StorageSpacePlaceSupplier
export const hasStorageSpacePlaceSupplier = () => {
  try {
    return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier.view;
  } catch (error) {
    return false;
  }
};
export const hasStorageSpacePlaceSupplierViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier.viewActive;
};
export const hasStorageSpacePlaceSupplierViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier
    .viewArchived;
};
export const hasStorageSpacePlaceSupplierViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier.viewBlocked;
};

export const hasStorageSpacePlaceSupplierAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier.itemAdd;
};
export const hasStorageSpacePlaceSupplierEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier.itemUpdate;
};

export const hasStorageSpacePlaceSupplierDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier
    .itemDeleteImage;
};
export const hasStorageSpacePlaceSupplierFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier
    .itemFinaleDelete;
};

export const hasStorageSpacePlaceSupplierChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier
    .changeActivationType;
};
export const hasStorageSpacePlaceSupplierActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier.itemActive;
};
export const hasStorageSpacePlaceSupplierArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier.itemArchive;
};
export const hasStorageSpacePlaceSupplierBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceSupplier.itemBlocked;
};
//#endregion StorageSpacePlaceSupplier

//#region StorageSpacePlaceParent
export const hasStorageSpacePlaceParent = () => {
  try {
    return store.getters.usersPrivilegeData.StorageSpacePlaceParent.view;
  } catch (error) {
    return false;
  }
};
export const hasStorageSpacePlaceParentViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent.viewActive;
};
export const hasStorageSpacePlaceParentViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent.viewArchived;
};
export const hasStorageSpacePlaceParentViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent.viewBlocked;
};

export const hasStorageSpacePlaceParentAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent.itemAdd;
};
export const hasStorageSpacePlaceParentEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent.itemUpdate;
};

export const hasStorageSpacePlaceParentDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent
    .itemDeleteImage;
};
export const hasStorageSpacePlaceParentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent
    .itemFinaleDelete;
};

export const hasStorageSpacePlaceParentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent
    .changeActivationType;
};
export const hasStorageSpacePlaceParentActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent.itemActive;
};
export const hasStorageSpacePlaceParentArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent.itemArchive;
};
export const hasStorageSpacePlaceParentBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceParent.itemBlocked;
};
//#endregion StorageSpacePlaceParent

//#region StorageSpacePlaceClient
export const hasStorageSpacePlaceClient = () => {
  try {
    return store.getters.usersPrivilegeData.StorageSpacePlaceClient.view;
  } catch (error) {
    return false;
  }
};
export const hasStorageSpacePlaceClientViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient.viewActive;
};
export const hasStorageSpacePlaceClientViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient.viewArchived;
};
export const hasStorageSpacePlaceClientViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient.viewBlocked;
};

export const hasStorageSpacePlaceClientAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient.itemAdd;
};
export const hasStorageSpacePlaceClientEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient.itemUpdate;
};

export const hasStorageSpacePlaceClientDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient
    .itemDeleteImage;
};
export const hasStorageSpacePlaceClientFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient
    .itemFinaleDelete;
};

export const hasStorageSpacePlaceClientChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient
    .changeActivationType;
};
export const hasStorageSpacePlaceClientActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient.itemActive;
};
export const hasStorageSpacePlaceClientArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient.itemArchive;
};
export const hasStorageSpacePlaceClientBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceClient.itemBlocked;
};
//#endregion StorageSpacePlaceClient

//#region StorageSpacePlaceOther
export const hasStorageSpacePlaceOther = () => {
  try {
    return store.getters.usersPrivilegeData.StorageSpacePlaceOther.view;
  } catch (error) {
    return false;
  }
};
export const hasStorageSpacePlaceOtherViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther.viewActive;
};
export const hasStorageSpacePlaceOtherViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther.viewArchived;
};
export const hasStorageSpacePlaceOtherViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther.viewBlocked;
};

export const hasStorageSpacePlaceOtherAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther.itemAdd;
};
export const hasStorageSpacePlaceOtherEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther.itemUpdate;
};

export const hasStorageSpacePlaceOtherDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther
    .itemDeleteImage;
};
export const hasStorageSpacePlaceOtherFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther
    .itemFinaleDelete;
};

export const hasStorageSpacePlaceOtherChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther
    .changeActivationType;
};
export const hasStorageSpacePlaceOtherActive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther.itemActive;
};
export const hasStorageSpacePlaceOtherArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther.itemArchive;
};
export const hasStorageSpacePlaceOtherBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpacePlaceOther.itemBlocked;
};
//#endregion StorageSpacePlaceOther

//#region StorageSpaceEducationalGroup
export const hasStorageSpaceEducationalGroup = () => {
  try {
    return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup.view;
  } catch (error) {
    return false;
  }
};
export const hasStorageSpaceEducationalGroupViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .viewActive;
};
export const hasStorageSpaceEducationalGroupViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .viewArchived;
};
export const hasStorageSpaceEducationalGroupViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .viewBlocked;
};

export const hasStorageSpaceEducationalGroupAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup.itemAdd;
};
export const hasStorageSpaceEducationalGroupEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .itemUpdate;
};

export const hasStorageSpaceEducationalGroupDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .itemDeleteImage;
};
export const hasStorageSpaceEducationalGroupFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .itemFinaleDelete;
};

export const hasStorageSpaceEducationalGroupChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .changeActivationType;
};
export const hasStorageSpaceEducationalGroupActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .itemActive;
};
export const hasStorageSpaceEducationalGroupArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .itemArchive;
};
export const hasStorageSpaceEducationalGroupBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceEducationalGroup
    .itemBlocked;
};
//#endregion StorageSpaceEducationalGroup

//#endregion StorageSpaces

//#region StorageSpaceMedias

//#region StorageSpaceMediaAdminsEgypt
export const hasStorageSpaceMediaAdminsEgypt = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt.view;
};
export const hasStorageSpaceMediaAdminsEgyptViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .viewActive;
};
export const hasStorageSpaceMediaAdminsEgyptViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .viewArchived;
};
export const hasStorageSpaceMediaAdminsEgyptViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .viewBlocked;
};

export const hasStorageSpaceMediaAdminsEgyptAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt.itemAdd;
};
export const hasStorageSpaceMediaAdminsEgyptEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .itemUpdate;
};

export const hasStorageSpaceMediaAdminsEgyptDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .itemDeleteImage;
};
export const hasStorageSpaceMediaAdminsEgyptFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaAdminsEgyptChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .changeActivationType;
};
export const hasStorageSpaceMediaAdminsEgyptActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .itemActive;
};
export const hasStorageSpaceMediaAdminsEgyptArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .itemArchive;
};
export const hasStorageSpaceMediaAdminsEgyptBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaAdminsEgypt
    .itemBlocked;
};
//#endregion StorageSpaceMediaAdminsEgypt

//#region StorageSpaceMediaMasterAdmin
export const hasStorageSpaceMediaMasterAdmin = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin.view;
};
export const hasStorageSpaceMediaMasterAdminViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .viewActive;
};
export const hasStorageSpaceMediaMasterAdminViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .viewArchived;
};
export const hasStorageSpaceMediaMasterAdminViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .viewBlocked;
};

export const hasStorageSpaceMediaMasterAdminAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin.itemAdd;
};
export const hasStorageSpaceMediaMasterAdminEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .itemUpdate;
};

export const hasStorageSpaceMediaMasterAdminDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .itemDeleteImage;
};
export const hasStorageSpaceMediaMasterAdminFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaMasterAdminChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .changeActivationType;
};
export const hasStorageSpaceMediaMasterAdminActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .itemActive;
};
export const hasStorageSpaceMediaMasterAdminArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .itemArchive;
};
export const hasStorageSpaceMediaMasterAdminBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaMasterAdmin
    .itemBlocked;
};
//#endregion StorageSpaceMediaMasterAdmin

//#region StorageSpaceMediaEmployee
export const hasStorageSpaceMediaEmployee = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee.view;
};
export const hasStorageSpaceMediaEmployeeViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee.viewActive;
};
export const hasStorageSpaceMediaEmployeeViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee
    .viewArchived;
};
export const hasStorageSpaceMediaEmployeeViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee.viewBlocked;
};

export const hasStorageSpaceMediaEmployeeAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee.itemAdd;
};
export const hasStorageSpaceMediaEmployeeEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee.itemUpdate;
};

export const hasStorageSpaceMediaEmployeeDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee
    .itemDeleteImage;
};
export const hasStorageSpaceMediaEmployeeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaEmployeeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee
    .changeActivationType;
};
export const hasStorageSpaceMediaEmployeeActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee.itemActive;
};
export const hasStorageSpaceMediaEmployeeArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee.itemArchive;
};
export const hasStorageSpaceMediaEmployeeBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEmployee.itemBlocked;
};
//#endregion StorageSpaceMediaEmployee

//#region StorageSpaceMediaStudent
export const hasStorageSpaceMediaStudent = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent.view;
};
export const hasStorageSpaceMediaStudentViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent.viewActive;
};
export const hasStorageSpaceMediaStudentViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent.viewArchived;
};
export const hasStorageSpaceMediaStudentViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent.viewBlocked;
};

export const hasStorageSpaceMediaStudentAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent.itemAdd;
};
export const hasStorageSpaceMediaStudentEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent.itemUpdate;
};

export const hasStorageSpaceMediaStudentDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent
    .itemDeleteImage;
};
export const hasStorageSpaceMediaStudentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaStudentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent
    .changeActivationType;
};
export const hasStorageSpaceMediaStudentActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent.itemActive;
};
export const hasStorageSpaceMediaStudentArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent.itemArchive;
};
export const hasStorageSpaceMediaStudentBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaStudent.itemBlocked;
};
//#endregion StorageSpaceMediaStudent

//#region StorageSpaceMediaSupplier
export const hasStorageSpaceMediaSupplier = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier.view;
};
export const hasStorageSpaceMediaSupplierViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier.viewActive;
};
export const hasStorageSpaceMediaSupplierViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier
    .viewArchived;
};
export const hasStorageSpaceMediaSupplierViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier.viewBlocked;
};

export const hasStorageSpaceMediaSupplierAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier.itemAdd;
};
export const hasStorageSpaceMediaSupplierEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier.itemUpdate;
};

export const hasStorageSpaceMediaSupplierDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier
    .itemDeleteImage;
};
export const hasStorageSpaceMediaSupplierFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaSupplierChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier
    .changeActivationType;
};
export const hasStorageSpaceMediaSupplierActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier.itemActive;
};
export const hasStorageSpaceMediaSupplierArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier.itemArchive;
};
export const hasStorageSpaceMediaSupplierBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaSupplier.itemBlocked;
};
//#endregion StorageSpaceMediaSupplier

//#region StorageSpaceMediaParent
export const hasStorageSpaceMediaParent = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent.view;
};
export const hasStorageSpaceMediaParentViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent.viewActive;
};
export const hasStorageSpaceMediaParentViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent.viewArchived;
};
export const hasStorageSpaceMediaParentViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent.viewBlocked;
};

export const hasStorageSpaceMediaParentAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent.itemAdd;
};
export const hasStorageSpaceMediaParentEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent.itemUpdate;
};

export const hasStorageSpaceMediaParentDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent
    .itemDeleteImage;
};
export const hasStorageSpaceMediaParentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaParentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent
    .changeActivationType;
};
export const hasStorageSpaceMediaParentActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent.itemActive;
};
export const hasStorageSpaceMediaParentArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent.itemArchive;
};
export const hasStorageSpaceMediaParentBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaParent.itemBlocked;
};
//#endregion StorageSpaceMediaParent

//#region StorageSpaceMediaClient
export const hasStorageSpaceMediaClient = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient.view;
};
export const hasStorageSpaceMediaClientViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient.viewActive;
};
export const hasStorageSpaceMediaClientViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient.viewArchived;
};
export const hasStorageSpaceMediaClientViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient.viewBlocked;
};

export const hasStorageSpaceMediaClientAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient.itemAdd;
};
export const hasStorageSpaceMediaClientEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient.itemUpdate;
};

export const hasStorageSpaceMediaClientDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient
    .itemDeleteImage;
};
export const hasStorageSpaceMediaClientFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaClientChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient
    .changeActivationType;
};
export const hasStorageSpaceMediaClientActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient.itemActive;
};
export const hasStorageSpaceMediaClientArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient.itemArchive;
};
export const hasStorageSpaceMediaClientBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaClient.itemBlocked;
};
//#endregion StorageSpaceMediaClient

//#region StorageSpaceMediaPlaceMasterAdmin
export const hasStorageSpaceMediaPlaceMasterAdmin = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .view;
};
export const hasStorageSpaceMediaPlaceMasterAdminViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .viewActive;
};
export const hasStorageSpaceMediaPlaceMasterAdminViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .viewArchived;
};
export const hasStorageSpaceMediaPlaceMasterAdminViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .viewBlocked;
};

export const hasStorageSpaceMediaPlaceMasterAdminAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .itemAdd;
};
export const hasStorageSpaceMediaPlaceMasterAdminEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .itemUpdate;
};

export const hasStorageSpaceMediaPlaceMasterAdminDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .itemDeleteImage;
};
export const hasStorageSpaceMediaPlaceMasterAdminFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaPlaceMasterAdminChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .changeActivationType;
};
export const hasStorageSpaceMediaPlaceMasterAdminActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .itemActive;
};
export const hasStorageSpaceMediaPlaceMasterAdminArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .itemArchive;
};
export const hasStorageSpaceMediaPlaceMasterAdminBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceMasterAdmin
    .itemBlocked;
};
//#endregion StorageSpaceMediaPlaceMasterAdmin

//#region StorageSpaceMediaPlaceEmployee
export const hasStorageSpaceMediaPlaceEmployee = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee.view;
};
export const hasStorageSpaceMediaPlaceEmployeeViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .viewActive;
};
export const hasStorageSpaceMediaPlaceEmployeeViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .viewArchived;
};
export const hasStorageSpaceMediaPlaceEmployeeViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .viewBlocked;
};

export const hasStorageSpaceMediaPlaceEmployeeAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .itemAdd;
};
export const hasStorageSpaceMediaPlaceEmployeeEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .itemUpdate;
};

export const hasStorageSpaceMediaPlaceEmployeeDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .itemDeleteImage;
};
export const hasStorageSpaceMediaPlaceEmployeeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaPlaceEmployeeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .changeActivationType;
};
export const hasStorageSpaceMediaPlaceEmployeeActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .itemActive;
};
export const hasStorageSpaceMediaPlaceEmployeeArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .itemArchive;
};
export const hasStorageSpaceMediaPlaceEmployeeBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceEmployee
    .itemBlocked;
};
//#endregion StorageSpaceMediaPlaceEmployee

//#region StorageSpaceMediaPlaceStudent
export const hasStorageSpaceMediaPlaceStudent = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent.view;
};
export const hasStorageSpaceMediaPlaceStudentViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .viewActive;
};
export const hasStorageSpaceMediaPlaceStudentViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .viewArchived;
};
export const hasStorageSpaceMediaPlaceStudentViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .viewBlocked;
};

export const hasStorageSpaceMediaPlaceStudentAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent.itemAdd;
};
export const hasStorageSpaceMediaPlaceStudentEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .itemUpdate;
};

export const hasStorageSpaceMediaPlaceStudentDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .itemDeleteImage;
};
export const hasStorageSpaceMediaPlaceStudentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaPlaceStudentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .changeActivationType;
};
export const hasStorageSpaceMediaPlaceStudentActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .itemActive;
};
export const hasStorageSpaceMediaPlaceStudentArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .itemArchive;
};
export const hasStorageSpaceMediaPlaceStudentBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceStudent
    .itemBlocked;
};
//#endregion StorageSpaceMediaPlaceStudent

//#region StorageSpaceMediaPlaceSupplier
export const hasStorageSpaceMediaPlaceSupplier = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier.view;
};
export const hasStorageSpaceMediaPlaceSupplierViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .viewActive;
};
export const hasStorageSpaceMediaPlaceSupplierViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .viewArchived;
};
export const hasStorageSpaceMediaPlaceSupplierViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .viewBlocked;
};

export const hasStorageSpaceMediaPlaceSupplierAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .itemAdd;
};
export const hasStorageSpaceMediaPlaceSupplierEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .itemUpdate;
};

export const hasStorageSpaceMediaPlaceSupplierDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .itemDeleteImage;
};
export const hasStorageSpaceMediaPlaceSupplierFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaPlaceSupplierChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .changeActivationType;
};
export const hasStorageSpaceMediaPlaceSupplierActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .itemActive;
};
export const hasStorageSpaceMediaPlaceSupplierArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .itemArchive;
};
export const hasStorageSpaceMediaPlaceSupplierBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceSupplier
    .itemBlocked;
};
//#endregion StorageSpaceMediaPlaceSupplier

//#region StorageSpaceMediaPlaceParent
export const hasStorageSpaceMediaPlaceParent = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent.view;
};
export const hasStorageSpaceMediaPlaceParentViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .viewActive;
};
export const hasStorageSpaceMediaPlaceParentViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .viewArchived;
};
export const hasStorageSpaceMediaPlaceParentViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .viewBlocked;
};

export const hasStorageSpaceMediaPlaceParentAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent.itemAdd;
};
export const hasStorageSpaceMediaPlaceParentEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .itemUpdate;
};

export const hasStorageSpaceMediaPlaceParentDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .itemDeleteImage;
};
export const hasStorageSpaceMediaPlaceParentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaPlaceParentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .changeActivationType;
};
export const hasStorageSpaceMediaPlaceParentActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .itemActive;
};
export const hasStorageSpaceMediaPlaceParentArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .itemArchive;
};
export const hasStorageSpaceMediaPlaceParentBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceParent
    .itemBlocked;
};
//#endregion StorageSpaceMediaPlaceParent

//#region StorageSpaceMediaPlaceClient
export const hasStorageSpaceMediaPlaceClient = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient.view;
};
export const hasStorageSpaceMediaPlaceClientViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .viewActive;
};
export const hasStorageSpaceMediaPlaceClientViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .viewArchived;
};
export const hasStorageSpaceMediaPlaceClientViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .viewBlocked;
};

export const hasStorageSpaceMediaPlaceClientAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient.itemAdd;
};
export const hasStorageSpaceMediaPlaceClientEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .itemUpdate;
};

export const hasStorageSpaceMediaPlaceClientDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .itemDeleteImage;
};
export const hasStorageSpaceMediaPlaceClientFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaPlaceClientChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .changeActivationType;
};
export const hasStorageSpaceMediaPlaceClientActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .itemActive;
};
export const hasStorageSpaceMediaPlaceClientArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .itemArchive;
};
export const hasStorageSpaceMediaPlaceClientBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceClient
    .itemBlocked;
};
//#endregion StorageSpaceMediaPlaceClient

//#region StorageSpaceMediaPlaceOther
export const hasStorageSpaceMediaPlaceOther = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther.view;
};
export const hasStorageSpaceMediaPlaceOtherViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .viewActive;
};
export const hasStorageSpaceMediaPlaceOtherViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .viewArchived;
};
export const hasStorageSpaceMediaPlaceOtherViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .viewBlocked;
};

export const hasStorageSpaceMediaPlaceOtherAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther.itemAdd;
};
export const hasStorageSpaceMediaPlaceOtherEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .itemUpdate;
};

export const hasStorageSpaceMediaPlaceOtherDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .itemDeleteImage;
};
export const hasStorageSpaceMediaPlaceOtherFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaPlaceOtherChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .changeActivationType;
};
export const hasStorageSpaceMediaPlaceOtherActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .itemActive;
};
export const hasStorageSpaceMediaPlaceOtherArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .itemArchive;
};
export const hasStorageSpaceMediaPlaceOtherBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaPlaceOther
    .itemBlocked;
};
//#endregion StorageSpaceMediaPlaceOther

//#region StorageSpaceMediaEducationalGroup
export const hasStorageSpaceMediaEducationalGroup = () => {
  try {
    return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
      .view;
  } catch (error) {
    return false;
  }
};
export const hasStorageSpaceMediaEducationalGroupViewActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .viewActive;
};
export const hasStorageSpaceMediaEducationalGroupViewArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .viewArchived;
};
export const hasStorageSpaceMediaEducationalGroupViewBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .viewBlocked;
};

export const hasStorageSpaceMediaEducationalGroupAdd = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .itemAdd;
};
export const hasStorageSpaceMediaEducationalGroupEdit = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .itemUpdate;
};

export const hasStorageSpaceMediaEducationalGroupDeleteImage = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .itemDeleteImage;
};
export const hasStorageSpaceMediaEducationalGroupFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .itemFinaleDelete;
};

export const hasStorageSpaceMediaEducationalGroupChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .changeActivationType;
};
export const hasStorageSpaceMediaEducationalGroupActive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .itemActive;
};
export const hasStorageSpaceMediaEducationalGroupArchive = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .itemArchive;
};
export const hasStorageSpaceMediaEducationalGroupBlocked = () => {
  return store.getters.usersPrivilegeData.StorageSpaceMediaEducationalGroup
    .itemBlocked;
};
//#endregion StorageSpaceMediaEducationalGroup

//#endregion StorageSpaceMedias

//#region SystemStructure

//#region SystemComponent

//#region SystemComponentPlace
export const hasSystemComponentPlace = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.view;
};
export const hasSystemComponentPlaceViewActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.viewActive;
};
export const hasSystemComponentPlaceViewArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.viewArchived;
};
export const hasSystemComponentPlaceViewBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.viewBlocked;
};

export const hasSystemComponentPlaceAdd = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.itemAdd;
};
export const hasSystemComponentPlaceEdit = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.itemUpdate;
};

export const hasSystemComponentPlaceDeleteImage = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.itemDeleteImage;
};
export const hasSystemComponentPlaceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.itemFinaleDelete;
};

export const hasSystemComponentPlaceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace
    .changeActivationType;
};
export const hasSystemComponentPlaceActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.itemActive;
};
export const hasSystemComponentPlaceArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.itemArchive;
};
export const hasSystemComponentPlaceBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentPlace.itemBlocked;
};
//#endregion SystemComponentPlace

//#region SystemComponentEducationalCategory
export const hasSystemComponentEducationalCategory = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .view;
};
export const hasSystemComponentEducationalCategoryViewActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .viewActive;
};
export const hasSystemComponentEducationalCategoryViewArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .viewArchived;
};
export const hasSystemComponentEducationalCategoryViewBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .viewBlocked;
};

export const hasSystemComponentEducationalCategoryAdd = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .itemAdd;
};
export const hasSystemComponentEducationalCategoryEdit = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .itemUpdate;
};

export const hasSystemComponentEducationalCategoryDeleteImage = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .itemDeleteImage;
};
export const hasSystemComponentEducationalCategoryFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .itemFinaleDelete;
};

export const hasSystemComponentEducationalCategoryChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .changeActivationType;
};
export const hasSystemComponentEducationalCategoryActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .itemActive;
};
export const hasSystemComponentEducationalCategoryArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .itemArchive;
};
export const hasSystemComponentEducationalCategoryBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentEducationalActivity
    .itemBlocked;
};
//#endregion SystemComponentEducationalCategory

//#region SystemComponentGeographicalDistribution
export const hasSystemComponentGeographicalDistribution = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.view;
};
export const hasSystemComponentGeographicalDistributionViewActive = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.viewActive;
};
export const hasSystemComponentGeographicalDistributionViewArchive = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.viewArchived;
};
export const hasSystemComponentGeographicalDistributionViewBlocked = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.viewBlocked;
};

export const hasSystemComponentGeographicalDistributionAdd = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.itemAdd;
};
export const hasSystemComponentGeographicalDistributionEdit = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.itemUpdate;
};

export const hasSystemComponentGeographicalDistributionDeleteImage = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.itemDeleteImage;
};
export const hasSystemComponentGeographicalDistributionFinaleDelete = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.itemFinaleDelete;
};

export const hasSystemComponentGeographicalDistributionChangeActivationType =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentGeographicalDistribution.changeActivationType;
  };
export const hasSystemComponentGeographicalDistributionActive = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.itemActive;
};
export const hasSystemComponentGeographicalDistributionArchive = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.itemArchive;
};
export const hasSystemComponentGeographicalDistributionBlocked = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentGeographicalDistribution.itemBlocked;
};
//#endregion SystemComponentGeographicalDistribution

//#region SystemComponentJobGrade
export const hasSystemComponentJobGrade = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade.view;
};
export const hasSystemComponentJobGradeViewActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade.viewActive;
};
export const hasSystemComponentJobGradeViewArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade.viewArchived;
};
export const hasSystemComponentJobGradeViewBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade.viewBlocked;
};

export const hasSystemComponentJobGradeAdd = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade.itemAdd;
};
export const hasSystemComponentJobGradeEdit = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade.itemUpdate;
};

export const hasSystemComponentJobGradeDeleteImage = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade
    .itemDeleteImage;
};
export const hasSystemComponentJobGradeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade
    .itemFinaleDelete;
};

export const hasSystemComponentJobGradeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade
    .changeActivationType;
};
export const hasSystemComponentJobGradeActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade.itemActive;
};
export const hasSystemComponentJobGradeArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade.itemArchive;
};
export const hasSystemComponentJobGradeBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentJobGrade.itemBlocked;
};
//#endregion SystemComponentJobGrade

//#region SystemComponentStoreItem
export const hasSystemComponentStoreItem = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem.view;
};
export const hasSystemComponentStoreItemViewActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem.viewActive;
};
export const hasSystemComponentStoreItemViewArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem.viewArchived;
};
export const hasSystemComponentStoreItemViewBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem.viewBlocked;
};

export const hasSystemComponentStoreItemAdd = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem.itemAdd;
};
export const hasSystemComponentStoreItemEdit = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem.itemUpdate;
};

export const hasSystemComponentStoreItemDeleteImage = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem
    .itemDeleteImage;
};
export const hasSystemComponentStoreItemFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem
    .itemFinaleDelete;
};

export const hasSystemComponentStoreItemChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem
    .changeActivationType;
};
export const hasSystemComponentStoreItemActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem.itemActive;
};
export const hasSystemComponentStoreItemArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem.itemArchive;
};
export const hasSystemComponentStoreItemBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentStoreItem.itemBlocked;
};
//#endregion SystemComponentStoreItem

//#endregion SystemComponent

//#region SystemComponentsHierarchy

//#region SystemComponentsHierarchyPlace
export const hasSystemComponentsHierarchyPlace = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace.view;
};
export const hasSystemComponentsHierarchyPlaceViewActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .viewActive;
};
export const hasSystemComponentsHierarchyPlaceViewArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .viewArchived;
};
export const hasSystemComponentsHierarchyPlaceViewBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .viewBlocked;
};

export const hasSystemComponentsHierarchyPlaceAdd = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .itemAdd;
};
export const hasSystemComponentsHierarchyPlaceEdit = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .itemUpdate;
};

export const hasSystemComponentsHierarchyPlaceDeleteImage = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .itemDeleteImage;
};
export const hasSystemComponentsHierarchyPlaceFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .itemFinaleDelete;
};

export const hasSystemComponentsHierarchyPlaceChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .changeActivationType;
};
export const hasSystemComponentsHierarchyPlaceActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .itemActive;
};
export const hasSystemComponentsHierarchyPlaceArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .itemArchive;
};
export const hasSystemComponentsHierarchyPlaceBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyPlace
    .itemBlocked;
};
//#endregion SystemComponentsHierarchyPlace

//#region SystemComponentsHierarchyEducationalCategory
export const hasSystemComponentsHierarchyEducationalCategory = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyEducationalActivity.view;
};
export const hasSystemComponentsHierarchyEducationalCategoryViewActive = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyEducationalActivity.viewActive;
};
export const hasSystemComponentsHierarchyEducationalCategoryViewArchive =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyEducationalActivity.viewArchived;
  };
export const hasSystemComponentsHierarchyEducationalCategoryViewBlocked =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyEducationalActivity.viewBlocked;
  };

export const hasSystemComponentsHierarchyEducationalCategoryAdd = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyEducationalActivity.itemAdd;
};
export const hasSystemComponentsHierarchyEducationalCategoryEdit = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyEducationalActivity.itemUpdate;
};

export const hasSystemComponentsHierarchyEducationalCategoryDeleteImage =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyEducationalActivity.itemDeleteImage;
  };
export const hasSystemComponentsHierarchyEducationalCategoryFinaleDelete =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyEducationalActivity.itemFinaleDelete;
  };

export const hasSystemComponentsHierarchyEducationalCategoryChangeActivationType =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyEducationalActivity.changeActivationType;
  };
export const hasSystemComponentsHierarchyEducationalCategoryActive = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyEducationalActivity.itemActive;
};
export const hasSystemComponentsHierarchyEducationalCategoryArchive = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyEducationalActivity.itemArchive;
};
export const hasSystemComponentsHierarchyEducationalCategoryBlocked = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyEducationalActivity.itemBlocked;
};
//#endregion SystemComponentsHierarchyEducationalCategory

//#region SystemComponentsHierarchyGeographicalDistribution
export const hasSystemComponentsHierarchyGeographicalDistribution = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyGeographicalDistribution.view;
};
export const hasSystemComponentsHierarchyGeographicalDistributionViewActive =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyGeographicalDistribution.viewActive;
  };
export const hasSystemComponentsHierarchyGeographicalDistributionViewArchive =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyGeographicalDistribution.viewArchived;
  };
export const hasSystemComponentsHierarchyGeographicalDistributionViewBlocked =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyGeographicalDistribution.viewBlocked;
  };

export const hasSystemComponentsHierarchyGeographicalDistributionAdd = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyGeographicalDistribution.itemAdd;
};
export const hasSystemComponentsHierarchyGeographicalDistributionEdit = () => {
  return store.getters.usersPrivilegeData
    .SystemComponentsHierarchyGeographicalDistribution.itemUpdate;
};

export const hasSystemComponentsHierarchyGeographicalDistributionDeleteImage =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyGeographicalDistribution.itemDeleteImage;
  };
export const hasSystemComponentsHierarchyGeographicalDistributionFinaleDelete =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyGeographicalDistribution.itemFinaleDelete;
  };

export const hasSystemComponentsHierarchyGeographicalDistributionChangeActivationType =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyGeographicalDistribution.changeActivationType;
  };
export const hasSystemComponentsHierarchyGeographicalDistributionActive =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyGeographicalDistribution.itemActive;
  };
export const hasSystemComponentsHierarchyGeographicalDistributionArchive =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyGeographicalDistribution.itemArchive;
  };
export const hasSystemComponentsHierarchyGeographicalDistributionBlocked =
  () => {
    return store.getters.usersPrivilegeData
      .SystemComponentsHierarchyGeographicalDistribution.itemBlocked;
  };
//#endregion SystemComponentsHierarchyGeographicalDistribution

//#region SystemComponentsHierarchyJobGrade
export const hasSystemComponentsHierarchyJobGrade = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .view;
};
export const hasSystemComponentsHierarchyJobGradeViewActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .viewActive;
};
export const hasSystemComponentsHierarchyJobGradeViewArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .viewArchived;
};
export const hasSystemComponentsHierarchyJobGradeViewBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .viewBlocked;
};

export const hasSystemComponentsHierarchyJobGradeAdd = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .itemAdd;
};
export const hasSystemComponentsHierarchyJobGradeEdit = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .itemUpdate;
};

export const hasSystemComponentsHierarchyJobGradeDeleteImage = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .itemDeleteImage;
};
export const hasSystemComponentsHierarchyJobGradeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .itemFinaleDelete;
};

export const hasSystemComponentsHierarchyJobGradeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .changeActivationType;
};
export const hasSystemComponentsHierarchyJobGradeActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .itemActive;
};
export const hasSystemComponentsHierarchyJobGradeArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .itemArchive;
};
export const hasSystemComponentsHierarchyJobGradeBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyJobGrade
    .itemBlocked;
};
//#endregion SystemComponentsHierarchyJobGrade

//#region SystemComponentsHierarchyStoreItem
export const hasSystemComponentsHierarchyStoreItem = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .view;
};
export const hasSystemComponentsHierarchyStoreItemViewActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .viewActive;
};
export const hasSystemComponentsHierarchyStoreItemViewArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .viewArchived;
};
export const hasSystemComponentsHierarchyStoreItemViewBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .viewBlocked;
};

export const hasSystemComponentsHierarchyStoreItemAdd = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .itemAdd;
};
export const hasSystemComponentsHierarchyStoreItemEdit = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .itemUpdate;
};

export const hasSystemComponentsHierarchyStoreItemDeleteImage = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .itemDeleteImage;
};
export const hasSystemComponentsHierarchyStoreItemFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .itemFinaleDelete;
};

export const hasSystemComponentsHierarchyStoreItemChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .changeActivationType;
};
export const hasSystemComponentsHierarchyStoreItemActive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .itemActive;
};
export const hasSystemComponentsHierarchyStoreItemArchive = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .itemArchive;
};
export const hasSystemComponentsHierarchyStoreItemBlocked = () => {
  return store.getters.usersPrivilegeData.SystemComponentsHierarchyStoreItem
    .itemBlocked;
};
//#endregion SystemComponentsHierarchyStoreItem

//#endregion SystemComponentsHierarchy

//#endregion SystemStructure

//#region Reports
export const hasReports = () => {
  return (
    hasStoreItemReport() ||
    hasPriceQuotationReport() ||
    hasPriceQuotationJobOrderReport() ||
    hasPriceQuotationJobOrderCusomersClosedJobReport() ||
    hasPriceQuotationJobOrderStaffAchievementsReport() ||
    hasPriceQuotationReportSalesStatistics()
  );
};
//#endregion Reports

//#region Settings

//#region SettingsOthers
export const hasSettingsOthers = () => {
  return (
    hasQualification() ||
    hasReligion() ||
    hasMilitaryStatusType() ||
    hasBloodType() ||
    hasCertificate() ||
    hasSocialStatuse() ||
    hasBank() ||
    hasKnownMethod() ||
    hasInsuranceCompany() ||
    hasColor() ||
    hasPriorityType() ||
    hasComplaintType() ||
    hasNewsCategory() ||
    hasComplaintSector() ||
    hasReminderPlan() ||
    hasPaymentMethod() ||
    hasGradingPlan() ||
    hasCountry() ||
    hasGeneralJob() ||
    hasRelativeRelationType() ||
    hasClassificationDegree() ||
    hasPersonalCardType() ||
    hasInstallmentBatchType() ||
    hasScientificDegree() ||
    hasGeographicalDistribution() ||
    hasSystemComponentGeographicalDistribution() ||
    hasSystemComponentsHierarchyGeographicalDistribution() ||
    hasJobGrade() ||
    hasSystemComponentsHierarchyJobGrade() ||
    hasSystemComponentJobGrade()
  );
};

//#region BloodTypes
export const hasBloodType = () => {
  try {
    return store.getters.usersPrivilegeData.BloodType.view;
  } catch (error) {
    return false;
  }
};
export const hasBloodTypeViewActive = () => {
  return store.getters.usersPrivilegeData.BloodType.viewActive;
};
export const hasBloodTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.BloodType.viewArchived;
};
export const hasBloodTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.BloodType.viewBlocked;
};

export const hasBloodTypeAdd = () => {
  return store.getters.usersPrivilegeData.BloodType.itemAdd;
};
export const hasBloodTypeEdit = () => {
  return store.getters.usersPrivilegeData.BloodType.itemUpdate;
};

export const hasBloodTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.BloodType.itemDeleteImage;
};
export const hasBloodTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.BloodType.itemFinaleDelete;
};

export const hasBloodTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.BloodType.changeActivationType;
};
export const hasBloodTypeActive = () => {
  return store.getters.usersPrivilegeData.BloodType.itemActive;
};
export const hasBloodTypeArchive = () => {
  return store.getters.usersPrivilegeData.BloodType.itemArchive;
};
export const hasBloodTypeBlocked = () => {
  return store.getters.usersPrivilegeData.BloodType.itemBlocked;
};
//#endregion BloodTypes

//#region Certificates
export const hasCertificate = () => {
  try {
    return store.getters.usersPrivilegeData.Certificate.view;
  } catch (error) {
    return false;
  }
};
export const hasCertificateViewActive = () => {
  return store.getters.usersPrivilegeData.Certificate.viewActive;
};
export const hasCertificateViewArchive = () => {
  return store.getters.usersPrivilegeData.Certificate.viewArchived;
};
export const hasCertificateViewBlocked = () => {
  return store.getters.usersPrivilegeData.Certificate.viewBlocked;
};

export const hasCertificateAdd = () => {
  return store.getters.usersPrivilegeData.Certificate.itemAdd;
};
export const hasCertificateEdit = () => {
  return store.getters.usersPrivilegeData.Certificate.itemUpdate;
};

export const hasCertificateDeleteImage = () => {
  return store.getters.usersPrivilegeData.Certificate.itemDeleteImage;
};
export const hasCertificateFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Certificate.itemFinaleDelete;
};

export const hasCertificateChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Certificate.changeActivationType;
};
export const hasCertificateActive = () => {
  return store.getters.usersPrivilegeData.Certificate.itemActive;
};
export const hasCertificateArchive = () => {
  return store.getters.usersPrivilegeData.Certificate.itemArchive;
};
export const hasCertificateBlocked = () => {
  return store.getters.usersPrivilegeData.Certificate.itemBlocked;
};
//#endregion Certificates

//#region SocialStatuses
export const hasSocialStatuse = () => {
  try {
    return store.getters.usersPrivilegeData.SocialStatuse.view;
  } catch (error) {
    return false;
  }
};
export const hasSocialStatuseViewActive = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.viewActive;
};
export const hasSocialStatuseViewArchive = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.viewArchived;
};
export const hasSocialStatuseViewBlocked = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.viewBlocked;
};

export const hasSocialStatuseAdd = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.itemAdd;
};
export const hasSocialStatuseEdit = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.itemUpdate;
};

export const hasSocialStatuseDeleteImage = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.itemDeleteImage;
};
export const hasSocialStatuseFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.itemFinaleDelete;
};

export const hasSocialStatuseChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.changeActivationType;
};
export const hasSocialStatuseActive = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.itemActive;
};
export const hasSocialStatuseArchive = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.itemArchive;
};
export const hasSocialStatuseBlocked = () => {
  return store.getters.usersPrivilegeData.SocialStatuse.itemBlocked;
};
//#endregion SocialStatuses

//#region Banks
export const hasBank = () => {
  try {
    return store.getters.usersPrivilegeData.Bank.view;
  } catch (error) {
    return false;
  }
};
export const hasBankViewActive = () => {
  return store.getters.usersPrivilegeData.Bank.viewActive;
};
export const hasBankViewArchive = () => {
  return store.getters.usersPrivilegeData.Bank.viewArchived;
};
export const hasBankViewBlocked = () => {
  return store.getters.usersPrivilegeData.Bank.viewBlocked;
};

export const hasBankAdd = () => {
  return store.getters.usersPrivilegeData.Bank.itemAdd;
};
export const hasBankEdit = () => {
  return store.getters.usersPrivilegeData.Bank.itemUpdate;
};

export const hasBankDeleteImage = () => {
  return store.getters.usersPrivilegeData.Bank.itemDeleteImage;
};
export const hasBankFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Bank.itemFinaleDelete;
};

export const hasBankChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Bank.changeActivationType;
};
export const hasBankActive = () => {
  return store.getters.usersPrivilegeData.Bank.itemActive;
};
export const hasBankArchive = () => {
  return store.getters.usersPrivilegeData.Bank.itemArchive;
};
export const hasBankBlocked = () => {
  return store.getters.usersPrivilegeData.Bank.itemBlocked;
};
//#endregion Banks

//#region KnownMethods
export const hasKnownMethod = () => {
  try {
    return store.getters.usersPrivilegeData.KnownMethod.view;
  } catch (error) {
    return false;
  }
};
export const hasKnownMethodReport = () => {
  try {
    return store.getters.usersPrivilegeData.KnownMethod.viewReport;
  } catch (error) {
    return false;
  }
};
export const hasKnownMethodViewActive = () => {
  return store.getters.usersPrivilegeData.KnownMethod.viewActive;
};
export const hasKnownMethodViewArchive = () => {
  return store.getters.usersPrivilegeData.KnownMethod.viewArchived;
};
export const hasKnownMethodViewBlocked = () => {
  return store.getters.usersPrivilegeData.KnownMethod.viewBlocked;
};

export const hasKnownMethodAdd = () => {
  return store.getters.usersPrivilegeData.KnownMethod.itemAdd;
};
export const hasKnownMethodEdit = () => {
  return store.getters.usersPrivilegeData.KnownMethod.itemUpdate;
};

export const hasKnownMethodDeleteImage = () => {
  return store.getters.usersPrivilegeData.KnownMethod.itemDeleteImage;
};
export const hasKnownMethodFinaleDelete = () => {
  return store.getters.usersPrivilegeData.KnownMethod.itemFinaleDelete;
};

export const hasKnownMethodChangeActivationType = () => {
  return store.getters.usersPrivilegeData.KnownMethod.changeActivationType;
};
export const hasKnownMethodActive = () => {
  return store.getters.usersPrivilegeData.KnownMethod.itemActive;
};
export const hasKnownMethodArchive = () => {
  return store.getters.usersPrivilegeData.KnownMethod.itemArchive;
};
export const hasKnownMethodBlocked = () => {
  return store.getters.usersPrivilegeData.KnownMethod.itemBlocked;
};
//#endregion KnownMethods

//#region GeographicalDistributions
export const hasGeographicalDistribution = () => {
  try {
    return store.getters.usersPrivilegeData.GeographicalDistribution.view;
  } catch (error) {
    return false;
  }
};
export const hasGeographicalDistributionViewActive = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution.viewActive;
};
export const hasGeographicalDistributionViewArchive = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution.viewArchived;
};
export const hasGeographicalDistributionViewBlocked = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution.viewBlocked;
};

export const hasGeographicalDistributionAdd = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution.itemAdd;
};
export const hasGeographicalDistributionEdit = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution.itemUpdate;
};

export const hasGeographicalDistributionDeleteImage = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution
    .itemDeleteImage;
};
export const hasGeographicalDistributionFinaleDelete = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution
    .itemFinaleDelete;
};

export const hasGeographicalDistributionChangeActivationType = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution
    .changeActivationType;
};
export const hasGeographicalDistributionActive = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution.itemActive;
};
export const hasGeographicalDistributionArchive = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution.itemArchive;
};
export const hasGeographicalDistributionBlocked = () => {
  return store.getters.usersPrivilegeData.GeographicalDistribution.itemBlocked;
};
//#endregion GeographicalDistributions

//#region InsuranceCompanies
export const hasInsuranceCompany = () => {
  try {
    return store.getters.usersPrivilegeData.InsuranceCompany.view;
  } catch (error) {
    return false;
  }
};
export const hasInsuranceCompanyViewActive = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.viewActive;
};
export const hasInsuranceCompanyViewArchive = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.viewArchived;
};
export const hasInsuranceCompanyViewBlocked = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.viewBlocked;
};

export const hasInsuranceCompanyAdd = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.itemAdd;
};
export const hasInsuranceCompanyEdit = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.itemUpdate;
};

export const hasInsuranceCompanyDeleteImage = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.itemDeleteImage;
};
export const hasInsuranceCompanyFinaleDelete = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.itemFinaleDelete;
};

export const hasInsuranceCompanyChangeActivationType = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.changeActivationType;
};
export const hasInsuranceCompanyActive = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.itemActive;
};
export const hasInsuranceCompanyArchive = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.itemArchive;
};
export const hasInsuranceCompanyBlocked = () => {
  return store.getters.usersPrivilegeData.InsuranceCompany.itemBlocked;
};
//#endregion InsuranceCompanies

//#region InstallmentBatchTypes
export const hasInstallmentBatchType = () => {
  try {
    return store.getters.usersPrivilegeData.InstallmentBatchType.view;
  } catch (error) {
    return false;
  }
};
export const hasInstallmentBatchTypeViewActive = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.viewActive;
};
export const hasInstallmentBatchTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.viewArchived;
};
export const hasInstallmentBatchTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.viewBlocked;
};

export const hasInstallmentBatchTypeAdd = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.itemAdd;
};
export const hasInstallmentBatchTypeEdit = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.itemUpdate;
};

export const hasInstallmentBatchTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.itemDeleteImage;
};
export const hasInstallmentBatchTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.itemFinaleDelete;
};

export const hasInstallmentBatchTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType
    .changeActivationType;
};
export const hasInstallmentBatchTypeActive = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.itemActive;
};
export const hasInstallmentBatchTypeArchive = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.itemArchive;
};
export const hasInstallmentBatchTypeBlocked = () => {
  return store.getters.usersPrivilegeData.InstallmentBatchType.itemBlocked;
};
//#endregion InstallmentBatchTypes

//#region Religions
export const hasReligion = () => {
  try {
    return store.getters.usersPrivilegeData.Religion.view;
  } catch (error) {
    return false;
  }
};
export const hasReligionReport = () => {
  try {
    return store.getters.usersPrivilegeData.Religion.viewReport;
  } catch (error) {
    return false;
  }
};
export const hasReligionViewActive = () => {
  return store.getters.usersPrivilegeData.Religion.viewActive;
};
export const hasReligionViewArchive = () => {
  return store.getters.usersPrivilegeData.Religion.viewArchived;
};
export const hasReligionViewBlocked = () => {
  return store.getters.usersPrivilegeData.Religion.viewBlocked;
};

export const hasReligionAdd = () => {
  return store.getters.usersPrivilegeData.Religion.itemAdd;
};
export const hasReligionEdit = () => {
  return store.getters.usersPrivilegeData.Religion.itemUpdate;
};

export const hasReligionDeleteImage = () => {
  return store.getters.usersPrivilegeData.Religion.itemDeleteImage;
};
export const hasReligionFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Religion.itemFinaleDelete;
};

export const hasReligionChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Religion.changeActivationType;
};
export const hasReligionActive = () => {
  return store.getters.usersPrivilegeData.Religion.itemActive;
};
export const hasReligionArchive = () => {
  return store.getters.usersPrivilegeData.Religion.itemArchive;
};
export const hasReligionBlocked = () => {
  return store.getters.usersPrivilegeData.Religion.itemBlocked;
};
//#endregion Religions

//#region Qualifications
export const hasQualification = () => {
  try {
    return store.getters.usersPrivilegeData.Qualification.view;
  } catch (error) {
    return false;
  }
};
export const hasQualificationReport = () => {
  try {
    return store.getters.usersPrivilegeData.Qualification.viewReport;
  } catch (error) {
    return false;
  }
};
export const hasQualificationViewActive = () => {
  return store.getters.usersPrivilegeData.Qualification.viewActive;
};
export const hasQualificationViewArchive = () => {
  return store.getters.usersPrivilegeData.Qualification.viewArchived;
};
export const hasQualificationViewBlocked = () => {
  return store.getters.usersPrivilegeData.Qualification.viewBlocked;
};

export const hasQualificationAdd = () => {
  return store.getters.usersPrivilegeData.Qualification.itemAdd;
};
export const hasQualificationEdit = () => {
  return store.getters.usersPrivilegeData.Qualification.itemUpdate;
};

export const hasQualificationDeleteImage = () => {
  return store.getters.usersPrivilegeData.Qualification.itemDeleteImage;
};
export const hasQualificationFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Qualification.itemFinaleDelete;
};

export const hasQualificationChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Qualification.changeActivationType;
};
export const hasQualificationActive = () => {
  return store.getters.usersPrivilegeData.Qualification.itemActive;
};
export const hasQualificationArchive = () => {
  return store.getters.usersPrivilegeData.Qualification.itemArchive;
};
export const hasQualificationBlocked = () => {
  return store.getters.usersPrivilegeData.Qualification.itemBlocked;
};
//#endregion Qualifications

//#region JobOrderStages
export const hasJobOrderStage = () => {
  try {
    return store.getters.usersPrivilegeData.JobOrderStage.view;
  } catch (error) {
    return false;
  }
};

export const hasJobOrderStageViewActive = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.viewActive;
};
export const hasJobOrderStageViewArchive = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.viewArchived;
};
export const hasJobOrderStageViewBlocked = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.viewBlocked;
};

export const hasJobOrderStageAdd = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.itemAdd;
};
export const hasJobOrderStageEdit = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.itemUpdate;
};

export const hasJobOrderStageDeleteImage = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.itemDeleteImage;
};
export const hasJobOrderStageFinaleDelete = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.itemFinaleDelete;
};

export const hasJobOrderStageChangeActivationType = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.changeActivationType;
};
export const hasJobOrderStageActive = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.itemActive;
};
export const hasJobOrderStageArchive = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.itemArchive;
};
export const hasJobOrderStageBlocked = () => {
  return store.getters.usersPrivilegeData.JobOrderStage.itemBlocked;
};
//#endregion JobOrderStages

//#region WorkFields
export const hasWorkField = () => {
  try {
    return store.getters.usersPrivilegeData.WorkField.view;
  } catch (error) {
    return false;
  }
};
export const hasWorkFieldReport = () => {
  try {
    return store.getters.usersPrivilegeData.WorkField.viewReport;
  } catch (error) {
    return false;
  }
};
export const hasWorkFieldViewActive = () => {
  return store.getters.usersPrivilegeData.WorkField.viewActive;
};
export const hasWorkFieldViewArchive = () => {
  return store.getters.usersPrivilegeData.WorkField.viewArchived;
};
export const hasWorkFieldViewBlocked = () => {
  return store.getters.usersPrivilegeData.WorkField.viewBlocked;
};

export const hasWorkFieldAdd = () => {
  return store.getters.usersPrivilegeData.WorkField.itemAdd;
};
export const hasWorkFieldEdit = () => {
  return store.getters.usersPrivilegeData.WorkField.itemUpdate;
};

export const hasWorkFieldDeleteImage = () => {
  return store.getters.usersPrivilegeData.WorkField.itemDeleteImage;
};
export const hasWorkFieldFinaleDelete = () => {
  return store.getters.usersPrivilegeData.WorkField.itemFinaleDelete;
};

export const hasWorkFieldChangeActivationType = () => {
  return store.getters.usersPrivilegeData.WorkField.changeActivationType;
};
export const hasWorkFieldActive = () => {
  return store.getters.usersPrivilegeData.WorkField.itemActive;
};
export const hasWorkFieldArchive = () => {
  return store.getters.usersPrivilegeData.WorkField.itemArchive;
};
export const hasWorkFieldBlocked = () => {
  return store.getters.usersPrivilegeData.WorkField.itemBlocked;
};
//#endregion WorkFields

//#region MilitaryStatusTypes
export const hasMilitaryStatusType = () => {
  try {
    return store.getters.usersPrivilegeData.MilitaryStatusType.view;
  } catch (error) {
    return false;
  }
};
export const hasMilitaryStatusTypeViewActive = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.viewActive;
};
export const hasMilitaryStatusTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.viewArchived;
};
export const hasMilitaryStatusTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.viewBlocked;
};

export const hasMilitaryStatusTypeAdd = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.itemAdd;
};
export const hasMilitaryStatusTypeEdit = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.itemUpdate;
};

export const hasMilitaryStatusTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.itemDeleteImage;
};
export const hasMilitaryStatusTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.itemFinaleDelete;
};

export const hasMilitaryStatusTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType
    .changeActivationType;
};
export const hasMilitaryStatusTypeActive = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.itemActive;
};
export const hasMilitaryStatusTypeArchive = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.itemArchive;
};
export const hasMilitaryStatusTypeBlocked = () => {
  return store.getters.usersPrivilegeData.MilitaryStatusType.itemBlocked;
};
//#endregion MilitaryStatusTypes

//#region Colors
export const hasColor = () => {
  return store.getters.usersPrivilegeData.Color.view;
};
export const hasColorViewActive = () => {
  return store.getters.usersPrivilegeData.Color.viewActive;
};
export const hasColorViewArchive = () => {
  return store.getters.usersPrivilegeData.Color.viewArchived;
};
export const hasColorViewBlocked = () => {
  return store.getters.usersPrivilegeData.Color.viewBlocked;
};

export const hasColorAdd = () => {
  return store.getters.usersPrivilegeData.Color.itemAdd;
};
export const hasColorEdit = () => {
  return store.getters.usersPrivilegeData.Color.itemUpdate;
};

export const hasColorDeleteImage = () => {
  return store.getters.usersPrivilegeData.Color.itemDeleteImage;
};
export const hasColorFinaleDelete = () => {
  return store.getters.usersPrivilegeData.Color.itemFinaleDelete;
};

export const hasColorChangeActivationType = () => {
  return store.getters.usersPrivilegeData.Color.changeActivationType;
};
export const hasColorActive = () => {
  return store.getters.usersPrivilegeData.Color.itemActive;
};
export const hasColorArchive = () => {
  return store.getters.usersPrivilegeData.Color.itemArchive;
};
export const hasColorBlocked = () => {
  return store.getters.usersPrivilegeData.Color.itemBlocked;
};
//#endregion Colors

//#region PriorityTypes
export const hasPriorityType = () => {
  return store.getters.usersPrivilegeData.PriorityType.view;
};
export const hasPriorityTypeViewActive = () => {
  return store.getters.usersPrivilegeData.PriorityType.viewActive;
};
export const hasPriorityTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.PriorityType.viewArchived;
};
export const hasPriorityTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.PriorityType.viewBlocked;
};

export const hasPriorityTypeAdd = () => {
  return store.getters.usersPrivilegeData.PriorityType.itemAdd;
};
export const hasPriorityTypeEdit = () => {
  return store.getters.usersPrivilegeData.PriorityType.itemUpdate;
};

export const hasPriorityTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.PriorityType.itemDeleteImage;
};
export const hasPriorityTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PriorityType.itemFinaleDelete;
};

export const hasPriorityTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PriorityType.changeActivationType;
};
export const hasPriorityTypeActive = () => {
  return store.getters.usersPrivilegeData.PriorityType.itemActive;
};
export const hasPriorityTypeArchive = () => {
  return store.getters.usersPrivilegeData.PriorityType.itemArchive;
};
export const hasPriorityTypeBlocked = () => {
  return store.getters.usersPrivilegeData.PriorityType.itemBlocked;
};
//#endregion PriorityTypes

//#region ComplaintTypes
export const hasComplaintType = () => {
  return store.getters.usersPrivilegeData.ComplaintType.view;
};
export const hasComplaintTypeViewActive = () => {
  return store.getters.usersPrivilegeData.ComplaintType.viewActive;
};
export const hasComplaintTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.ComplaintType.viewArchived;
};
export const hasComplaintTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.ComplaintType.viewBlocked;
};

export const hasComplaintTypeAdd = () => {
  return store.getters.usersPrivilegeData.ComplaintType.itemAdd;
};
export const hasComplaintTypeEdit = () => {
  return store.getters.usersPrivilegeData.ComplaintType.itemUpdate;
};

export const hasComplaintTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.ComplaintType.itemDeleteImage;
};
export const hasComplaintTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ComplaintType.itemFinaleDelete;
};

export const hasComplaintTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ComplaintType.changeActivationType;
};
export const hasComplaintTypeActive = () => {
  return store.getters.usersPrivilegeData.ComplaintType.itemActive;
};
export const hasComplaintTypeArchive = () => {
  return store.getters.usersPrivilegeData.ComplaintType.itemArchive;
};
export const hasComplaintTypeBlocked = () => {
  return store.getters.usersPrivilegeData.ComplaintType.itemBlocked;
};
//#endregion ComplaintTypes

//#region NewsCategories
export const hasNewsCategory = () => {
  return store.getters.usersPrivilegeData.NewsCategory.view;
};
export const hasNewsCategoryViewActive = () => {
  return store.getters.usersPrivilegeData.NewsCategory.viewActive;
};
export const hasNewsCategoryViewArchive = () => {
  return store.getters.usersPrivilegeData.NewsCategory.viewArchived;
};
export const hasNewsCategoryViewBlocked = () => {
  return store.getters.usersPrivilegeData.NewsCategory.viewBlocked;
};

export const hasNewsCategoryAdd = () => {
  return store.getters.usersPrivilegeData.NewsCategory.itemAdd;
};
export const hasNewsCategoryEdit = () => {
  return store.getters.usersPrivilegeData.NewsCategory.itemUpdate;
};

export const hasNewsCategoryDeleteImage = () => {
  return store.getters.usersPrivilegeData.NewsCategory.itemDeleteImage;
};
export const hasNewsCategoryFinaleDelete = () => {
  return store.getters.usersPrivilegeData.NewsCategory.itemFinaleDelete;
};

export const hasNewsCategoryChangeActivationType = () => {
  return store.getters.usersPrivilegeData.NewsCategory.changeActivationType;
};
export const hasNewsCategoryActive = () => {
  return store.getters.usersPrivilegeData.NewsCategory.itemActive;
};
export const hasNewsCategoryArchive = () => {
  return store.getters.usersPrivilegeData.NewsCategory.itemArchive;
};
export const hasNewsCategoryBlocked = () => {
  return store.getters.usersPrivilegeData.ComplaintType.itemBlocked;
};
//#endregion NewsCategories

//#region ComplaintSectors
export const hasComplaintSector = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.view;
};
export const hasComplaintSectorViewActive = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.viewActive;
};
export const hasComplaintSectorViewArchive = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.viewArchived;
};
export const hasComplaintSectorViewBlocked = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.viewBlocked;
};

export const hasComplaintSectorAdd = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.itemAdd;
};
export const hasComplaintSectorEdit = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.itemUpdate;
};

export const hasComplaintSectorDeleteImage = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.itemDeleteImage;
};
export const hasComplaintSectorFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.itemFinaleDelete;
};

export const hasComplaintSectorChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.changeActivationType;
};
export const hasComplaintSectorActive = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.itemActive;
};
export const hasComplaintSectorArchive = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.itemArchive;
};
export const hasComplaintSectorBlocked = () => {
  return store.getters.usersPrivilegeData.ComplaintSector.itemBlocked;
};
//#endregion ComplaintSectors

//#region ReminderPlans
export const hasReminderPlan = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.view;
};
export const hasReminderPlanViewActive = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.viewActive;
};
export const hasReminderPlanViewArchive = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.viewArchived;
};
export const hasReminderPlanViewBlocked = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.viewBlocked;
};

export const hasReminderPlanAdd = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.itemAdd;
};
export const hasReminderPlanEdit = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.itemUpdate;
};

export const hasReminderPlanDeleteImage = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.itemDeleteImage;
};
export const hasReminderPlanFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.itemFinaleDelete;
};

export const hasReminderPlanChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.changeActivationType;
};
export const hasReminderPlanActive = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.itemActive;
};
export const hasReminderPlanArchive = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.itemArchive;
};
export const hasReminderPlanBlocked = () => {
  return store.getters.usersPrivilegeData.ReminderPlan.itemBlocked;
};
//#endregion ReminderPlans

//#region ExpensesTypes
export const hasExpensesType = () => {
  return store.getters.usersPrivilegeData.ExpensesType.view;
};
export const hasExpensesTypeViewActive = () => {
  return store.getters.usersPrivilegeData.ExpensesType.viewActive;
};
export const hasExpensesTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.ExpensesType.viewArchived;
};
export const hasExpensesTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.ExpensesType.viewBlocked;
};

export const hasExpensesTypeAdd = () => {
  return store.getters.usersPrivilegeData.ExpensesType.itemAdd;
};
export const hasExpensesTypeEdit = () => {
  return store.getters.usersPrivilegeData.ExpensesType.itemUpdate;
};

export const hasExpensesTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.ExpensesType.itemDeleteImage;
};
export const hasExpensesTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ExpensesType.itemFinaleDelete;
};

export const hasExpensesTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ExpensesType.changeActivationType;
};
export const hasExpensesTypeActive = () => {
  return store.getters.usersPrivilegeData.ExpensesType.itemActive;
};
export const hasExpensesTypeArchive = () => {
  return store.getters.usersPrivilegeData.ExpensesType.itemArchive;
};
export const hasExpensesTypeBlocked = () => {
  return store.getters.usersPrivilegeData.ExpensesType.itemBlocked;
};
//#endregion ExpensesTypes

//#region RevenuesTypes
export const hasRevenuesType = () => {
  return store.getters.usersPrivilegeData.RevenuesType.view;
};
export const hasRevenuesTypeViewActive = () => {
  return store.getters.usersPrivilegeData.RevenuesType.viewActive;
};
export const hasRevenuesTypeViewArchive = () => {
  return store.getters.usersPrivilegeData.RevenuesType.viewArchived;
};
export const hasRevenuesTypeViewBlocked = () => {
  return store.getters.usersPrivilegeData.RevenuesType.viewBlocked;
};

export const hasRevenuesTypeAdd = () => {
  return store.getters.usersPrivilegeData.RevenuesType.itemAdd;
};
export const hasRevenuesTypeEdit = () => {
  return store.getters.usersPrivilegeData.RevenuesType.itemUpdate;
};

export const hasRevenuesTypeDeleteImage = () => {
  return store.getters.usersPrivilegeData.RevenuesType.itemDeleteImage;
};
export const hasRevenuesTypeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.RevenuesType.itemFinaleDelete;
};

export const hasRevenuesTypeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.RevenuesType.changeActivationType;
};
export const hasRevenuesTypeActive = () => {
  return store.getters.usersPrivilegeData.RevenuesType.itemActive;
};
export const hasRevenuesTypeArchive = () => {
  return store.getters.usersPrivilegeData.RevenuesType.itemArchive;
};
export const hasRevenuesTypeBlocked = () => {
  return store.getters.usersPrivilegeData.RevenuesType.itemBlocked;
};
//#endregion RevenuesTypes

//#region PaymentMethods
export const hasPaymentMethod = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.view;
};
export const hasPaymentMethodViewActive = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.viewActive;
};
export const hasPaymentMethodViewArchive = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.viewArchived;
};
export const hasPaymentMethodViewBlocked = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.viewBlocked;
};

export const hasPaymentMethodAdd = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.itemAdd;
};
export const hasPaymentMethodEdit = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.itemUpdate;
};

export const hasPaymentMethodDeleteImage = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.itemDeleteImage;
};
export const hasPaymentMethodFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.itemFinaleDelete;
};

export const hasPaymentMethodChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.changeActivationType;
};
export const hasPaymentMethodActive = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.itemActive;
};
export const hasPaymentMethodArchive = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.itemArchive;
};
export const hasPaymentMethodBlocked = () => {
  return store.getters.usersPrivilegeData.PaymentMethod.itemBlocked;
};
//#endregion PaymentMethods

//#region GradingPlans
export const hasGradingPlan = () => {
  return store.getters.usersPrivilegeData.GradingPlan.view;
};
export const hasGradingPlanViewActive = () => {
  return store.getters.usersPrivilegeData.GradingPlan.viewActive;
};
export const hasGradingPlanViewArchive = () => {
  return store.getters.usersPrivilegeData.GradingPlan.viewArchived;
};
export const hasGradingPlanViewBlocked = () => {
  return store.getters.usersPrivilegeData.GradingPlan.viewBlocked;
};

export const hasGradingPlanAdd = () => {
  return store.getters.usersPrivilegeData.GradingPlan.itemAdd;
};
export const hasGradingPlanEdit = () => {
  return store.getters.usersPrivilegeData.GradingPlan.itemUpdate;
};

export const hasGradingPlanDeleteImage = () => {
  return store.getters.usersPrivilegeData.GradingPlan.itemDeleteImage;
};
export const hasGradingPlanFinaleDelete = () => {
  return store.getters.usersPrivilegeData.GradingPlan.itemFinaleDelete;
};

export const hasGradingPlanChangeActivationType = () => {
  return store.getters.usersPrivilegeData.GradingPlan.changeActivationType;
};
export const hasGradingPlanActive = () => {
  return store.getters.usersPrivilegeData.GradingPlan.itemActive;
};
export const hasGradingPlanArchive = () => {
  return store.getters.usersPrivilegeData.GradingPlan.itemArchive;
};
export const hasGradingPlanBlocked = () => {
  return store.getters.usersPrivilegeData.GradingPlan.itemBlocked;
};
//#endregion GradingPlans

//#region PriceLists
export const hasPriceList = () => {
  try {
    return store.getters.usersPrivilegeData.PriceList.view;
  } catch (error) {
    return false;
  }
};
export const hasPriceListViewActive = () => {
  return store.getters.usersPrivilegeData.PriceList.viewActive;
};
export const hasPriceListViewArchive = () => {
  return store.getters.usersPrivilegeData.PriceList.viewArchived;
};
export const hasPriceListViewBlocked = () => {
  return store.getters.usersPrivilegeData.PriceList.viewBlocked;
};

export const hasPriceListAdd = () => {
  return store.getters.usersPrivilegeData.PriceList.itemAdd;
};
export const hasPriceListEdit = () => {
  return store.getters.usersPrivilegeData.PriceList.itemUpdate;
};

export const hasPriceListDeleteImage = () => {
  return store.getters.usersPrivilegeData.PriceList.itemDeleteImage;
};
export const hasPriceListFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PriceList.itemFinaleDelete;
};

export const hasPriceListChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PriceList.changeActivationType;
};
export const hasPriceListActive = () => {
  return store.getters.usersPrivilegeData.PriceList.itemActive;
};
export const hasPriceListArchive = () => {
  return store.getters.usersPrivilegeData.PriceList.itemArchive;
};
export const hasPriceListBlocked = () => {
  return store.getters.usersPrivilegeData.PriceList.itemBlocked;
};
//#endregion PriceLists

//#region Countries
export const hasCountry = () => {
  try {
    return store.getters.usersPrivilegeData.Country.view;
  } catch (error) {
    return false;
  }
};
export const hasCountryViewActive = () => {
  try {
    return store.getters.usersPrivilegeData.Country.viewActive;
  } catch (error) {
    return false;
  }
};
export const hasCountryViewArchive = () => {
  try {
    return store.getters.usersPrivilegeData.Country.viewArchived;
  } catch (error) {
    return false;
  }
};
export const hasCountryViewBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.Country.viewBlocked;
  } catch (error) {
    return false;
  }
};

export const hasCountryAdd = () => {
  try {
    return store.getters.usersPrivilegeData.Country.itemAdd;
  } catch (error) {
    return false;
  }
};
export const hasCountryEdit = () => {
  try {
    return store.getters.usersPrivilegeData.Country.itemUpdate;
  } catch (error) {
    return false;
  }
};

export const hasCountryDeleteImage = () => {
  try {
    return store.getters.usersPrivilegeData.Country.itemDeleteImage;
  } catch (error) {
    return false;
  }
};
export const hasCountryFinaleDelete = () => {
  try {
    return store.getters.usersPrivilegeData.Country.itemFinaleDelete;
  } catch (error) {
    return false;
  }
};

export const hasCountryChangeActivationType = () => {
  try {
    return store.getters.usersPrivilegeData.Country.changeActivationType;
  } catch (error) {
    return false;
  }
};
export const hasCountryActive = () => {
  try {
    return store.getters.usersPrivilegeData.Country.itemActive;
  } catch (error) {
    return false;
  }
};
export const hasCountryArchive = () => {
  try {
    return store.getters.usersPrivilegeData.Country.itemArchive;
  } catch (error) {
    return false;
  }
};
export const hasCountryBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.Country.itemBlocked;
  } catch (error) {
    return false;
  }
};
//#endregion Countries

//#region GeneralJobs
export const hasGeneralJob = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.view;
  } catch (error) {
    return false;
  }
};
export const hasGeneralJobViewActive = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.viewActive;
  } catch (error) {
    return false;
  }
};
export const hasGeneralJobViewArchive = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.viewArchived;
  } catch (error) {
    return false;
  }
};
export const hasGeneralJobViewBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.viewBlocked;
  } catch (error) {
    return false;
  }
};

export const hasGeneralJobAdd = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.itemAdd;
  } catch (error) {
    return false;
  }
};
export const hasGeneralJobEdit = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.itemUpdate;
  } catch (error) {
    return false;
  }
};

export const hasGeneralJobDeleteImage = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.itemDeleteImage;
  } catch (error) {
    return false;
  }
};
export const hasGeneralJobFinaleDelete = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.itemFinaleDelete;
  } catch (error) {
    return false;
  }
};

export const hasGeneralJobChangeActivationType = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.changeActivationType;
  } catch (error) {
    return false;
  }
};
export const hasGeneralJobActive = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.itemActive;
  } catch (error) {
    return false;
  }
};
export const hasGeneralJobArchive = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.itemArchive;
  } catch (error) {
    return false;
  }
};
export const hasGeneralJobBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.GeneralJob.itemBlocked;
  } catch (error) {
    return false;
  }
};
//#endregion GeneralJobs

//#region RelativeRelationTypes
export const hasRelativeRelationType = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType.view;
  } catch (error) {
    return false;
  }
};
export const hasRelativeRelationTypeViewActive = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType.viewActive;
  } catch (error) {
    return false;
  }
};
export const hasRelativeRelationTypeViewArchive = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType.viewArchived;
  } catch (error) {
    return false;
  }
};
export const hasRelativeRelationTypeViewBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType.viewBlocked;
  } catch (error) {
    return false;
  }
};

export const hasRelativeRelationTypeAdd = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType.itemAdd;
  } catch (error) {
    return false;
  }
};
export const hasRelativeRelationTypeEdit = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType.itemUpdate;
  } catch (error) {
    return false;
  }
};

export const hasRelativeRelationTypeDeleteImage = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType
      .itemDeleteImage;
  } catch (error) {
    return false;
  }
};
export const hasRelativeRelationTypeFinaleDelete = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType
      .itemFinaleDelete;
  } catch (error) {
    return false;
  }
};

export const hasRelativeRelationTypeChangeActivationType = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType
      .changeActivationType;
  } catch (error) {
    return false;
  }
};
export const hasRelativeRelationTypeActive = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType.itemActive;
  } catch (error) {
    return false;
  }
};
export const hasRelativeRelationTypeArchive = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType.itemArchive;
  } catch (error) {
    return false;
  }
};
export const hasRelativeRelationTypeBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.RelativeRelationType.itemBlocked;
  } catch (error) {
    return false;
  }
};
//#endregion RelativeRelationTypes

//#region ClassificationDegrees
export const hasClassificationDegree = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree.view;
  } catch (error) {
    return false;
  }
};
export const hasClassificationDegreeViewActive = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree.viewActive;
  } catch (error) {
    return false;
  }
};
export const hasClassificationDegreeViewArchive = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree.viewArchived;
  } catch (error) {
    return false;
  }
};
export const hasClassificationDegreeViewBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree.viewBlocked;
  } catch (error) {
    return false;
  }
};

export const hasClassificationDegreeAdd = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree.itemAdd;
  } catch (error) {
    return false;
  }
};
export const hasClassificationDegreeEdit = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree.itemUpdate;
  } catch (error) {
    return false;
  }
};

export const hasClassificationDegreeDeleteImage = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree
      .itemDeleteImage;
  } catch (error) {
    return false;
  }
};
export const hasClassificationDegreeFinaleDelete = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree
      .itemFinaleDelete;
  } catch (error) {
    return false;
  }
};

export const hasClassificationDegreeChangeActivationType = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree
      .changeActivationType;
  } catch (error) {
    return false;
  }
};
export const hasClassificationDegreeActive = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree.itemActive;
  } catch (error) {
    return false;
  }
};
export const hasClassificationDegreeArchive = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree.itemArchive;
  } catch (error) {
    return false;
  }
};
export const hasClassificationDegreeBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.ClassificationDegree.itemBlocked;
  } catch (error) {
    return false;
  }
};
//#endregion ClassificationDegrees

//#region JobGrades
export const hasJobGrade = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.view;
  } catch (error) {
    return false;
  }
};
export const hasJobGradeViewActive = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.viewActive;
  } catch (error) {
    return false;
  }
};
export const hasJobGradeViewArchive = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.viewArchived;
  } catch (error) {
    return false;
  }
};
export const hasJobGradeViewBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.viewBlocked;
  } catch (error) {
    return false;
  }
};

export const hasJobGradeAdd = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.itemAdd;
  } catch (error) {
    return false;
  }
};
export const hasJobGradeEdit = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.itemUpdate;
  } catch (error) {
    return false;
  }
};

export const hasJobGradeDeleteImage = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.itemDeleteImage;
  } catch (error) {
    return false;
  }
};
export const hasJobGradeFinaleDelete = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.itemFinaleDelete;
  } catch (error) {
    return false;
  }
};

export const hasJobGradeChangeActivationType = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.changeActivationType;
  } catch (error) {
    return false;
  }
};
export const hasJobGradeActive = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.itemActive;
  } catch (error) {
    return false;
  }
};
export const hasJobGradeArchive = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.itemArchive;
  } catch (error) {
    return false;
  }
};
export const hasJobGradeBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.JobGrade.itemBlocked;
  } catch (error) {
    return false;
  }
};
//#endregion JobGrades

//#region PersonalCardTypes
export const hasPersonalCardType = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.view;
  } catch (error) {
    return false;
  }
};
export const hasPersonalCardTypeViewActive = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.viewActive;
  } catch (error) {
    return false;
  }
};
export const hasPersonalCardTypeViewArchive = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.viewArchived;
  } catch (error) {
    return false;
  }
};
export const hasPersonalCardTypeViewBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.viewBlocked;
  } catch (error) {
    return false;
  }
};

export const hasPersonalCardTypeAdd = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.itemAdd;
  } catch (error) {
    return false;
  }
};
export const hasPersonalCardTypeEdit = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.itemUpdate;
  } catch (error) {
    return false;
  }
};

export const hasPersonalCardTypeDeleteImage = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.itemDeleteImage;
  } catch (error) {
    return false;
  }
};
export const hasPersonalCardTypeFinaleDelete = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.itemFinaleDelete;
  } catch (error) {
    return false;
  }
};

export const hasPersonalCardTypeChangeActivationType = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType
      .changeActivationType;
  } catch (error) {
    return false;
  }
};
export const hasPersonalCardTypeActive = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.itemActive;
  } catch (error) {
    return false;
  }
};
export const hasPersonalCardTypeArchive = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.itemArchive;
  } catch (error) {
    return false;
  }
};
export const hasPersonalCardTypeBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.PersonalCardType.itemBlocked;
  } catch (error) {
    return false;
  }
};
//#endregion PersonalCardTypes

//#region ScientificDegrees
export const hasScientificDegree = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.view;
  } catch (error) {
    return false;
  }
};
export const hasScientificDegreeViewActive = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.viewActive;
  } catch (error) {
    return false;
  }
};
export const hasScientificDegreeViewArchive = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.viewArchived;
  } catch (error) {
    return false;
  }
};
export const hasScientificDegreeViewBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.viewBlocked;
  } catch (error) {
    return false;
  }
};

export const hasScientificDegreeAdd = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.itemAdd;
  } catch (error) {
    return false;
  }
};
export const hasScientificDegreeEdit = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.itemUpdate;
  } catch (error) {
    return false;
  }
};

export const hasScientificDegreeDeleteImage = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.itemDeleteImage;
  } catch (error) {
    return false;
  }
};
export const hasScientificDegreeFinaleDelete = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.itemFinaleDelete;
  } catch (error) {
    return false;
  }
};

export const hasScientificDegreeChangeActivationType = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree
      .changeActivationType;
  } catch (error) {
    return false;
  }
};
export const hasScientificDegreeActive = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.itemActive;
  } catch (error) {
    return false;
  }
};
export const hasScientificDegreeArchive = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.itemArchive;
  } catch (error) {
    return false;
  }
};
export const hasScientificDegreeBlocked = () => {
  try {
    return store.getters.usersPrivilegeData.ScientificDegree.itemBlocked;
  } catch (error) {
    return false;
  }
};
//#endregion ScientificDegrees

//#endregion SettingsOthers

//#endregion Settings

//#region UserSettings
export const hasUserSettings = () => {
  return (
    hasUserValidSettingsTabsMasterAdmin() ||
    hasUserValidSettingsTabsEmployee() ||
    hasUserValidSettingsTabsStudent() ||
    hasUserValidSettingsTabsSupplier() ||
    hasUserValidSettingsTabsParent() ||
    hasUserValidSettingsTabsClient()
  );
};
//#region UserValidSettingsTabs
// MasterAdmin
export const hasUserValidSettingsTabsMasterAdmin = () => {
  return (
    hasPlaceMasterAdmin() ||
    hasMasterAdminEstablishmentsRole() ||
    hasMasterAdminValidSetting() ||
    hasMasterAdminLoginCode()
  );
};
// Employee
export const hasUserValidSettingsTabsEmployee = () => {
  return (
    hasPlaceEmployee() ||
    hasEmployeeEstablishmentsRole() ||
    hasEmployeeValidSetting() ||
    hasEmployeeLoginCode()
  );
};
// Student
export const hasUserValidSettingsTabsStudent = () => {
  return (
    hasPlaceStudent() ||
    hasStudentEstablishmentsRole() ||
    hasStudentValidSetting() ||
    hasStudentLoginCode()
  );
};
// Supplier
export const hasUserValidSettingsTabsSupplier = () => {
  return (
    hasPlaceSupplier() ||
    hasSupplierEstablishmentsRole() ||
    hasSupplierValidSetting() ||
    hasSupplierLoginCode()
  );
};
// Parent
export const hasUserValidSettingsTabsParent = () => {
  return (
    hasPlaceParent() ||
    hasParentEstablishmentsRole() ||
    hasParentValidSetting() ||
    hasParentLoginCode()
  );
};
// Client
export const hasUserValidSettingsTabsClient = () => {
  return (
    hasPlaceClient() ||
    hasClientEstablishmentsRole() ||
    hasClientValidSetting() ||
    hasClientLoginCode()
  );
};
//#endregion UserValidSettingsTabs

//#region UserValidSettings
export const hasUserValidSetting = () => {
  return (
    hasAdminsEgyptValidSetting() ||
    hasMasterAdminValidSetting() ||
    hasEmployeeValidSetting() ||
    hasStudentValidSetting() ||
    hasSupplierValidSetting() ||
    hasParentValidSetting() ||
    hasClientValidSetting()
  );
};

//#region Student
export const hasStudentValidSetting = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.view;
};
export const hasStudentValidSettingViewActive = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.viewActive;
};
export const hasStudentValidSettingViewArchive = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.viewArchived;
};
export const hasStudentValidSettingViewBlocked = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.viewBlocked;
};

export const hasStudentValidSettingAdd = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.itemAdd;
};
export const hasStudentValidSettingEdit = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.itemUpdate;
};

export const hasStudentValidSettingDeleteImage = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.itemDeleteImage;
};
export const hasStudentValidSettingFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.itemFinaleDelete;
};

export const hasStudentValidSettingChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting
    .changeActivationType;
};
export const hasStudentValidSettingActive = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.itemActive;
};
export const hasStudentValidSettingArchive = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.itemArchive;
};
export const hasStudentValidSettingBlocked = () => {
  return store.getters.usersPrivilegeData.StudentValidSetting.itemBlocked;
};
//#endregion Student

//#region Supplier
export const hasSupplierValidSetting = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.view;
};
export const hasSupplierValidSettingViewActive = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.viewActive;
};
export const hasSupplierValidSettingViewArchive = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.viewArchived;
};
export const hasSupplierValidSettingViewBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.viewBlocked;
};

export const hasSupplierValidSettingAdd = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.itemAdd;
};
export const hasSupplierValidSettingEdit = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.itemUpdate;
};

export const hasSupplierValidSettingDeleteImage = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.itemDeleteImage;
};
export const hasSupplierValidSettingFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.itemFinaleDelete;
};

export const hasSupplierValidSettingChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting
    .changeActivationType;
};
export const hasSupplierValidSettingActive = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.itemActive;
};
export const hasSupplierValidSettingArchive = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.itemArchive;
};
export const hasSupplierValidSettingBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierValidSetting.itemBlocked;
};
//#endregion Supplier

//#region Parent
export const hasParentValidSetting = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.view;
};
export const hasParentValidSettingViewActive = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.viewActive;
};
export const hasParentValidSettingViewArchive = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.viewArchived;
};
export const hasParentValidSettingViewBlocked = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.viewBlocked;
};

export const hasParentValidSettingAdd = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.itemAdd;
};
export const hasParentValidSettingEdit = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.itemUpdate;
};

export const hasParentValidSettingDeleteImage = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.itemDeleteImage;
};
export const hasParentValidSettingFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.itemFinaleDelete;
};

export const hasParentValidSettingChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting
    .changeActivationType;
};
export const hasParentValidSettingActive = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.itemActive;
};
export const hasParentValidSettingArchive = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.itemArchive;
};
export const hasParentValidSettingBlocked = () => {
  return store.getters.usersPrivilegeData.ParentValidSetting.itemBlocked;
};
//#endregion Parent

//#region Client
export const hasClientValidSetting = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.view;
};
export const hasClientValidSettingViewActive = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.viewActive;
};
export const hasClientValidSettingViewArchive = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.viewArchived;
};
export const hasClientValidSettingViewBlocked = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.viewBlocked;
};

export const hasClientValidSettingAdd = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.itemAdd;
};
export const hasClientValidSettingEdit = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.itemUpdate;
};

export const hasClientValidSettingDeleteImage = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.itemDeleteImage;
};
export const hasClientValidSettingFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.itemFinaleDelete;
};

export const hasClientValidSettingChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting
    .changeActivationType;
};
export const hasClientValidSettingActive = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.itemActive;
};
export const hasClientValidSettingArchive = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.itemArchive;
};
export const hasClientValidSettingBlocked = () => {
  return store.getters.usersPrivilegeData.ClientValidSetting.itemBlocked;
};
//#endregion Client

//#region Employee
export const hasEmployeeValidSetting = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.view;
};
export const hasEmployeeValidSettingViewActive = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.viewActive;
};
export const hasEmployeeValidSettingViewArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.viewArchived;
};
export const hasEmployeeValidSettingViewBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.viewBlocked;
};

export const hasEmployeeValidSettingAdd = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.itemAdd;
};
export const hasEmployeeValidSettingEdit = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.itemUpdate;
};

export const hasEmployeeValidSettingDeleteImage = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.itemDeleteImage;
};
export const hasEmployeeValidSettingFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.itemFinaleDelete;
};

export const hasEmployeeValidSettingChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting
    .changeActivationType;
};
export const hasEmployeeValidSettingActive = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.itemActive;
};
export const hasEmployeeValidSettingArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.itemArchive;
};
export const hasEmployeeValidSettingBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeValidSetting.itemBlocked;
};
//#endregion Employee

//#region MasterAdmin
export const hasMasterAdminValidSetting = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting.view;
};
export const hasMasterAdminValidSettingViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting.viewActive;
};
export const hasMasterAdminValidSettingViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting.viewArchived;
};
export const hasMasterAdminValidSettingViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting.viewBlocked;
};

export const hasMasterAdminValidSettingAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting.itemAdd;
};
export const hasMasterAdminValidSettingEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting.itemUpdate;
};

export const hasMasterAdminValidSettingDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting
    .itemDeleteImage;
};
export const hasMasterAdminValidSettingFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting
    .itemFinaleDelete;
};

export const hasMasterAdminValidSettingChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting
    .changeActivationType;
};
export const hasMasterAdminValidSettingActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting.itemActive;
};
export const hasMasterAdminValidSettingArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting.itemArchive;
};
export const hasMasterAdminValidSettingBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminValidSetting.itemBlocked;
};
//#endregion MasterAdmin

//#region AdminsEgypt
export const hasAdminsEgyptValidSetting = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting.view;
};
export const hasAdminsEgyptValidSettingViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting.viewActive;
};
export const hasAdminsEgyptValidSettingViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting.viewArchived;
};
export const hasAdminsEgyptValidSettingViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting.viewBlocked;
};

export const hasAdminsEgyptValidSettingAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting.itemAdd;
};
export const hasAdminsEgyptValidSettingEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting.itemUpdate;
};

export const hasAdminsEgyptValidSettingDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting
    .itemDeleteImage;
};
export const hasAdminsEgyptValidSettingFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting
    .itemFinaleDelete;
};

export const hasAdminsEgyptValidSettingChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting
    .changeActivationType;
};
export const hasAdminsEgyptValidSettingActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting.itemActive;
};
export const hasAdminsEgyptValidSettingArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting.itemArchive;
};
export const hasAdminsEgyptValidSettingBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptValidSetting.itemBlocked;
};
//#endregion AdminsEgypt

//#endregion UserLoginCodes

//#region EstablishmentsRoles
export const hasEstablishmentsRole = () => {
  return (
    hasAdminsEgyptEstablishmentsRole() ||
    hasMasterAdminEstablishmentsRole() ||
    hasEmployeeEstablishmentsRole() ||
    hasStudentEstablishmentsRole() ||
    hasSupplierEstablishmentsRole() ||
    hasParentEstablishmentsRole() ||
    hasClientEstablishmentsRole()
  );
};
export const hasEstablishmentRoleEdit = (modelName) => {
  let status = false;
  switch (modelName) {
    case "adminsEgyptEstablishmentsRole":
      status = hasAdminsEgyptEstablishmentsRoleEdit();
      break;
    case "masterAdminEstablishmentsRole":
      status = hasMasterAdminEstablishmentsRoleEdit();
      break;
    case "employeeEstablishmentsRole":
      status = hasEmployeeEstablishmentsRoleEdit();
      break;
    case "studentEstablishmentsRole":
      status = hasStudentEstablishmentsRoleEdit();
      break;
    case "supplierEstablishmentsRole":
      status = hasSupplierEstablishmentsRoleEdit();
      break;
    case "parentEstablishmentsRole":
      status = hasParentEstablishmentsRoleEdit();
      break;
    case "clientEstablishmentsRole":
      status = hasClientEstablishmentsRoleEdit();
      break;
  }
  return status;
};

//#region Student
export const hasStudentEstablishmentsRole = () => {
  try {
    return store.getters.usersPrivilegeData.StudentEstablishmentsRole.view;
  } catch (error) {
    return false;
  }
};
export const hasStudentEstablishmentsRoleViewActive = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole.viewActive;
};
export const hasStudentEstablishmentsRoleViewArchive = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole
    .viewArchived;
};
export const hasStudentEstablishmentsRoleViewBlocked = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole.viewBlocked;
};

export const hasStudentEstablishmentsRoleAdd = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole.itemAdd;
};
export const hasStudentEstablishmentsRoleEdit = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole.itemUpdate;
};

export const hasStudentEstablishmentsRoleDeleteImage = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole
    .itemDeleteImage;
};
export const hasStudentEstablishmentsRoleFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole
    .itemFinaleDelete;
};

export const hasStudentEstablishmentsRoleChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole
    .changeActivationType;
};
export const hasStudentEstablishmentsRoleActive = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole.itemActive;
};
export const hasStudentEstablishmentsRoleArchive = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole.itemArchive;
};
export const hasStudentEstablishmentsRoleBlocked = () => {
  return store.getters.usersPrivilegeData.StudentEstablishmentsRole.itemBlocked;
};
//#endregion Student

//#region Supplier
export const hasSupplierEstablishmentsRole = () => {
  try {
    return store.getters.usersPrivilegeData.SupplierEstablishmentsRole.view;
  } catch (error) {
    return false;
  }
};
export const hasSupplierEstablishmentsRoleViewActive = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole.viewActive;
};
export const hasSupplierEstablishmentsRoleViewArchive = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole
    .viewArchived;
};
export const hasSupplierEstablishmentsRoleViewBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole
    .viewBlocked;
};

export const hasSupplierEstablishmentsRoleAdd = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole.itemAdd;
};
export const hasSupplierEstablishmentsRoleEdit = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole.itemUpdate;
};

export const hasSupplierEstablishmentsRoleDeleteImage = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole
    .itemDeleteImage;
};
export const hasSupplierEstablishmentsRoleFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole
    .itemFinaleDelete;
};

export const hasSupplierEstablishmentsRoleChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole
    .changeActivationType;
};
export const hasSupplierEstablishmentsRoleActive = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole.itemActive;
};
export const hasSupplierEstablishmentsRoleArchive = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole
    .itemArchive;
};
export const hasSupplierEstablishmentsRoleBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierEstablishmentsRole
    .itemBlocked;
};
//#endregion Supplier

//#region Parent
export const hasParentEstablishmentsRole = () => {
  try {
    return store.getters.usersPrivilegeData.ParentEstablishmentsRole.view;
  } catch (error) {
    return false;
  }
};
export const hasParentEstablishmentsRoleViewActive = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole.viewActive;
};
export const hasParentEstablishmentsRoleViewArchive = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole.viewArchived;
};
export const hasParentEstablishmentsRoleViewBlocked = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole.viewBlocked;
};

export const hasParentEstablishmentsRoleAdd = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole.itemAdd;
};
export const hasParentEstablishmentsRoleEdit = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole.itemUpdate;
};

export const hasParentEstablishmentsRoleDeleteImage = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole
    .itemDeleteImage;
};
export const hasParentEstablishmentsRoleFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole
    .itemFinaleDelete;
};

export const hasParentEstablishmentsRoleChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole
    .changeActivationType;
};
export const hasParentEstablishmentsRoleActive = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole.itemActive;
};
export const hasParentEstablishmentsRoleArchive = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole.itemArchive;
};
export const hasParentEstablishmentsRoleBlocked = () => {
  return store.getters.usersPrivilegeData.ParentEstablishmentsRole.itemBlocked;
};
//#endregion Parent

//#region Client
export const hasClientEstablishmentsRole = () => {
  try {
    return store.getters.usersPrivilegeData.ClientEstablishmentsRole.view;
  } catch (error) {
    return false;
  }
};
export const hasClientEstablishmentsRoleViewActive = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole.viewActive;
};
export const hasClientEstablishmentsRoleViewArchive = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole.viewArchived;
};
export const hasClientEstablishmentsRoleViewBlocked = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole.viewBlocked;
};

export const hasClientEstablishmentsRoleAdd = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole.itemAdd;
};
export const hasClientEstablishmentsRoleEdit = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole.itemUpdate;
};

export const hasClientEstablishmentsRoleDeleteImage = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole
    .itemDeleteImage;
};
export const hasClientEstablishmentsRoleFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole
    .itemFinaleDelete;
};

export const hasClientEstablishmentsRoleChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole
    .changeActivationType;
};
export const hasClientEstablishmentsRoleActive = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole.itemActive;
};
export const hasClientEstablishmentsRoleArchive = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole.itemArchive;
};
export const hasClientEstablishmentsRoleBlocked = () => {
  return store.getters.usersPrivilegeData.ClientEstablishmentsRole.itemBlocked;
};
//#endregion Client

//#region Employee
export const hasEmployeeEstablishmentsRole = () => {
  try {
    return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole.view;
  } catch (error) {
    return false;
  }
};
export const hasEmployeeEstablishmentsRoleViewActive = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole.viewActive;
};
export const hasEmployeeEstablishmentsRoleViewArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole
    .viewArchived;
};
export const hasEmployeeEstablishmentsRoleViewBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole
    .viewBlocked;
};

export const hasEmployeeEstablishmentsRoleAdd = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole.itemAdd;
};
export const hasEmployeeEstablishmentsRoleEdit = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole.itemUpdate;
};

export const hasEmployeeEstablishmentsRoleDeleteImage = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole
    .itemDeleteImage;
};
export const hasEmployeeEstablishmentsRoleFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole
    .itemFinaleDelete;
};

export const hasEmployeeEstablishmentsRoleChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole
    .changeActivationType;
};
export const hasEmployeeEstablishmentsRoleActive = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole.itemActive;
};
export const hasEmployeeEstablishmentsRoleArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole
    .itemArchive;
};
export const hasEmployeeEstablishmentsRoleBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeEstablishmentsRole
    .itemBlocked;
};
//#endregion Employee

//#region MasterAdmin
export const hasMasterAdminEstablishmentsRole = () => {
  try {
    return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole.view;
  } catch (error) {
    return false;
  }
};
export const hasMasterAdminEstablishmentsRoleViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .viewActive;
};
export const hasMasterAdminEstablishmentsRoleViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .viewArchived;
};
export const hasMasterAdminEstablishmentsRoleViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .viewBlocked;
};

export const hasMasterAdminEstablishmentsRoleAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole.itemAdd;
};
export const hasMasterAdminEstablishmentsRoleEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .itemUpdate;
};

export const hasMasterAdminEstablishmentsRoleDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .itemDeleteImage;
};
export const hasMasterAdminEstablishmentsRoleFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .itemFinaleDelete;
};

export const hasMasterAdminEstablishmentsRoleChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .changeActivationType;
};
export const hasMasterAdminEstablishmentsRoleActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .itemActive;
};
export const hasMasterAdminEstablishmentsRoleArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .itemArchive;
};
export const hasMasterAdminEstablishmentsRoleBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminEstablishmentsRole
    .itemBlocked;
};
//#endregion MasterAdmin

//#region AdminsEgypt
export const hasAdminsEgyptEstablishmentsRole = () => {
  try {
    return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole.view;
  } catch (error) {
    return false;
  }
};
export const hasAdminsEgyptEstablishmentsRoleViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .viewActive;
};
export const hasAdminsEgyptEstablishmentsRoleViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .viewArchived;
};
export const hasAdminsEgyptEstablishmentsRoleViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .viewBlocked;
};

export const hasAdminsEgyptEstablishmentsRoleAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole.itemAdd;
};
export const hasAdminsEgyptEstablishmentsRoleEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .itemUpdate;
};

export const hasAdminsEgyptEstablishmentsRoleDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .itemDeleteImage;
};
export const hasAdminsEgyptEstablishmentsRoleFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .itemFinaleDelete;
};

export const hasAdminsEgyptEstablishmentsRoleChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .changeActivationType;
};
export const hasAdminsEgyptEstablishmentsRoleActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .itemActive;
};
export const hasAdminsEgyptEstablishmentsRoleArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .itemArchive;
};
export const hasAdminsEgyptEstablishmentsRoleBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptEstablishmentsRole
    .itemBlocked;
};
//#endregion AdminsEgypt

//#endregion EstablishmentsRoles

//#region UserLoginCodes
export const hasUserLoginCode = () => {
  return (
    hasAdminsEgyptLoginCode() ||
    hasMasterAdminLoginCode() ||
    hasEmployeeLoginCode() ||
    hasStudentLoginCode() ||
    hasSupplierLoginCode() ||
    hasParentLoginCode() ||
    hasClientLoginCode()
  );
};

//#region Student
export const hasStudentLoginCode = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.view;
};
export const hasStudentLoginCodeViewActive = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.viewActive;
};
export const hasStudentLoginCodeViewArchive = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.viewArchived;
};
export const hasStudentLoginCodeViewBlocked = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.viewBlocked;
};

export const hasStudentLoginCodeAdd = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.itemAdd;
};
export const hasStudentLoginCodeEdit = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.itemUpdate;
};

export const hasStudentLoginCodeDeleteImage = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.itemDeleteImage;
};
export const hasStudentLoginCodeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.itemFinaleDelete;
};

export const hasStudentLoginCodeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.changeActivationType;
};
export const hasStudentLoginCodeActive = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.itemActive;
};
export const hasStudentLoginCodeArchive = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.itemArchive;
};
export const hasStudentLoginCodeBlocked = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.itemBlocked;
};
export const hasStudentLoginCodeResetCode = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.resetUserloginCode;
};
export const hasStudentLoginCodeResetDevice = () => {
  return store.getters.usersPrivilegeData.StudentLoginCode.resetUserDeviceCode;
};
//#endregion Student

//#region Supplier
export const hasSupplierLoginCode = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.view;
};
export const hasSupplierLoginCodeViewActive = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.viewActive;
};
export const hasSupplierLoginCodeViewArchive = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.viewArchived;
};
export const hasSupplierLoginCodeViewBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.viewBlocked;
};

export const hasSupplierLoginCodeAdd = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.itemAdd;
};
export const hasSupplierLoginCodeEdit = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.itemUpdate;
};

export const hasSupplierLoginCodeDeleteImage = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.itemDeleteImage;
};
export const hasSupplierLoginCodeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.itemFinaleDelete;
};

export const hasSupplierLoginCodeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode
    .changeActivationType;
};
export const hasSupplierLoginCodeActive = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.itemActive;
};
export const hasSupplierLoginCodeArchive = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.itemArchive;
};
export const hasSupplierLoginCodeBlocked = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.itemBlocked;
};
export const hasSupplierLoginCodeResetCode = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.resetUserloginCode;
};
export const hasSupplierLoginCodeResetDevice = () => {
  return store.getters.usersPrivilegeData.SupplierLoginCode.resetUserDeviceCode;
};
//#endregion Supplier

//#region Parent
export const hasParentLoginCode = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.view;
};
export const hasParentLoginCodeViewActive = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.viewActive;
};
export const hasParentLoginCodeViewArchive = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.viewArchived;
};
export const hasParentLoginCodeViewBlocked = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.viewBlocked;
};

export const hasParentLoginCodeAdd = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.itemAdd;
};
export const hasParentLoginCodeEdit = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.itemUpdate;
};

export const hasParentLoginCodeDeleteImage = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.itemDeleteImage;
};
export const hasParentLoginCodeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.itemFinaleDelete;
};

export const hasParentLoginCodeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.changeActivationType;
};
export const hasParentLoginCodeActive = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.itemActive;
};
export const hasParentLoginCodeArchive = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.itemArchive;
};
export const hasParentLoginCodeBlocked = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.itemBlocked;
};
export const hasParentLoginCodeResetCode = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.resetUserloginCode;
};
export const hasParentLoginCodeResetDevice = () => {
  return store.getters.usersPrivilegeData.ParentLoginCode.resetUserDeviceCode;
};
//#endregion Parent

//#region Client
export const hasClientLoginCode = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.view;
};
export const hasClientLoginCodeViewActive = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.viewActive;
};
export const hasClientLoginCodeViewArchive = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.viewArchived;
};
export const hasClientLoginCodeViewBlocked = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.viewBlocked;
};

export const hasClientLoginCodeAdd = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.itemAdd;
};
export const hasClientLoginCodeEdit = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.itemUpdate;
};

export const hasClientLoginCodeDeleteImage = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.itemDeleteImage;
};
export const hasClientLoginCodeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.itemFinaleDelete;
};

export const hasClientLoginCodeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.changeActivationType;
};
export const hasClientLoginCodeActive = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.itemActive;
};
export const hasClientLoginCodeArchive = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.itemArchive;
};
export const hasClientLoginCodeBlocked = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.itemBlocked;
};
export const hasClientLoginCodeResetCode = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.resetUserloginCode;
};
export const hasClientLoginCodeResetDevice = () => {
  return store.getters.usersPrivilegeData.ClientLoginCode.resetUserDeviceCode;
};
//#endregion Client

//#region Employee
export const hasEmployeeLoginCode = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.view;
};
export const hasEmployeeLoginCodeViewActive = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.viewActive;
};
export const hasEmployeeLoginCodeViewArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.viewArchived;
};
export const hasEmployeeLoginCodeViewBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.viewBlocked;
};

export const hasEmployeeLoginCodeAdd = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.itemAdd;
};
export const hasEmployeeLoginCodeEdit = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.itemUpdate;
};

export const hasEmployeeLoginCodeDeleteImage = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.itemDeleteImage;
};
export const hasEmployeeLoginCodeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.itemFinaleDelete;
};

export const hasEmployeeLoginCodeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode
    .changeActivationType;
};
export const hasEmployeeLoginCodeActive = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.itemActive;
};
export const hasEmployeeLoginCodeArchive = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.itemArchive;
};
export const hasEmployeeLoginCodeBlocked = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.itemBlocked;
};
export const hasEmployeeLoginCodeResetCode = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.resetUserloginCode;
};
export const hasEmployeeLoginCodeResetDevice = () => {
  return store.getters.usersPrivilegeData.EmployeeLoginCode.resetUserDeviceCode;
};
//#endregion Employee

//#region MasterAdmin
export const hasMasterAdminLoginCode = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.view;
};
export const hasMasterAdminLoginCodeViewActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.viewActive;
};
export const hasMasterAdminLoginCodeViewArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.viewArchived;
};
export const hasMasterAdminLoginCodeViewBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.viewBlocked;
};

export const hasMasterAdminLoginCodeAdd = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.itemAdd;
};
export const hasMasterAdminLoginCodeEdit = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.itemUpdate;
};

export const hasMasterAdminLoginCodeDeleteImage = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.itemDeleteImage;
};
export const hasMasterAdminLoginCodeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.itemFinaleDelete;
};

export const hasMasterAdminLoginCodeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode
    .changeActivationType;
};
export const hasMasterAdminLoginCodeActive = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.itemActive;
};
export const hasMasterAdminLoginCodeArchive = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.itemArchive;
};
export const hasMasterAdminLoginCodeBlocked = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode.itemBlocked;
};
export const hasMasterAdminLoginCodeResetCode = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode
    .resetUserloginCode;
};
export const hasMasterAdminLoginCodeResetDevice = () => {
  return store.getters.usersPrivilegeData.MasterAdminLoginCode
    .resetUserDeviceCode;
};
//#endregion MasterAdmin

//#region AdminsEgypt
export const hasAdminsEgyptLoginCode = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.view;
};
export const hasAdminsEgyptLoginCodeViewActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.viewActive;
};
export const hasAdminsEgyptLoginCodeViewArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.viewArchived;
};
export const hasAdminsEgyptLoginCodeViewBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.viewBlocked;
};

export const hasAdminsEgyptLoginCodeAdd = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.itemAdd;
};
export const hasAdminsEgyptLoginCodeEdit = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.itemUpdate;
};

export const hasAdminsEgyptLoginCodeDeleteImage = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.itemDeleteImage;
};
export const hasAdminsEgyptLoginCodeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.itemFinaleDelete;
};

export const hasAdminsEgyptLoginCodeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode
    .changeActivationType;
};
export const hasAdminsEgyptLoginCodeActive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.itemActive;
};
export const hasAdminsEgyptLoginCodeArchive = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.itemArchive;
};
export const hasAdminsEgyptLoginCodeBlocked = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode.itemBlocked;
};
export const hasAdminsEgyptLoginCodeResetCode = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode
    .resetUserloginCode;
};
export const hasAdminsEgyptLoginCodeResetDevice = () => {
  return store.getters.usersPrivilegeData.AdminsEgyptLoginCode
    .resetUserDeviceCode;
};
//#endregion AdminsEgypt

//#endregion UserLoginCodes

//#endregion UserSettings

//#region User
export const hasUser = () => {
  return store.getters.usersPrivilegeData.User.view;
};
export const hasUserAdd = () => {
  return store.getters.usersPrivilegeData.User.itemAdd;
};
export const hasUserEdit = () => {
  return store.getters.usersPriviegeData.User.itemUpdate;
};
export const hasUserActive = () => {
  return store.getters.usersPrivilegeData.User.itemActive;
};
export const hasUserArchive = () => {
  return store.getters.usersPrivilegeData.User.itemArchive;
};
export const hasUserBlocked = () => {
  return store.getters.usersPrivilegeData.User.itemBlocked;
};
export const hasUserDeleteImage = () => {
  return store.getters.usersPrivilegeData.User.itemDeleteImage;
};
export const hasUserFinaleDelete = () => {
  return store.getters.usersPrivilegeData.User.itemFinaleDelete;
};
//#endregion User

//#region Places
export const hasPlace = () => {
  return (
    hasPlaceMasterAdmin() ||
    hasPlaceEmployee() ||
    hasPlaceStudent() ||
    hasPlaceSupplier() ||
    hasPlaceParent() ||
    hasPlaceClient() ||
    hasPlaceOther()
  );
};

//#region MasterAdmin
export const hasPlaceMasterAdmin = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.view;
};
export const hasPlaceMasterAdminViewActive = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.viewActive;
};
export const hasPlaceMasterAdminViewArchive = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.viewArchived;
};
export const hasPlaceMasterAdminViewBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.viewBlocked;
};

export const hasPlaceMasterAdminAdd = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.itemAdd;
};
export const hasPlaceMasterAdminEdit = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.itemUpdate;
};

export const hasPlaceMasterAdminDeleteImage = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.itemDeleteImage;
};
export const hasPlaceMasterAdminFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.itemFinaleDelete;
};

export const hasPlaceMasterAdminChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.changeActivationType;
};
export const hasPlaceMasterAdminActive = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.itemActive;
};
export const hasPlaceMasterAdminArchive = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.itemArchive;
};
export const hasPlaceMasterAdminBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceMasterAdmin.itemBlocked;
};
//#endregion MasterAdmin

//#region Employee
export const hasPlaceEmployee = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.view;
};
export const hasPlaceEmployeeViewActive = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.viewActive;
};
export const hasPlaceEmployeeViewArchive = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.viewArchived;
};
export const hasPlaceEmployeeViewBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.viewBlocked;
};

export const hasPlaceEmployeeAdd = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.itemAdd;
};
export const hasPlaceEmployeeEdit = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.itemUpdate;
};

export const hasPlaceEmployeeDeleteImage = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.itemDeleteImage;
};
export const hasPlaceEmployeeFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.itemFinaleDelete;
};

export const hasPlaceEmployeeChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.changeActivationType;
};
export const hasPlaceEmployeeActive = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.itemActive;
};
export const hasPlaceEmployeeArchive = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.itemArchive;
};
export const hasPlaceEmployeeBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceEmployee.itemBlocked;
};
//#endregion Employee

//#region Student
export const hasPlaceStudent = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.view;
};
export const hasPlaceStudentViewActive = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.viewActive;
};
export const hasPlaceStudentViewArchive = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.viewArchived;
};
export const hasPlaceStudentViewBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.viewBlocked;
};

export const hasPlaceStudentAdd = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.itemAdd;
};
export const hasPlaceStudentEdit = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.itemUpdate;
};

export const hasPlaceStudentDeleteImage = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.itemDeleteImage;
};
export const hasPlaceStudentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.itemFinaleDelete;
};

export const hasPlaceStudentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.changeActivationType;
};
export const hasPlaceStudentActive = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.itemActive;
};
export const hasPlaceStudentArchive = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.itemArchive;
};
export const hasPlaceStudentBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceStudent.itemBlocked;
};
//#endregion Student

//#region Supplier
export const hasPlaceSupplier = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.view;
};
export const hasPlaceSupplierViewActive = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.viewActive;
};
export const hasPlaceSupplierViewArchive = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.viewArchived;
};
export const hasPlaceSupplierViewBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.viewBlocked;
};

export const hasPlaceSupplierAdd = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.itemAdd;
};
export const hasPlaceSupplierEdit = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.itemUpdate;
};

export const hasPlaceSupplierDeleteImage = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.itemDeleteImage;
};
export const hasPlaceSupplierFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.itemFinaleDelete;
};

export const hasPlaceSupplierChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.changeActivationType;
};
export const hasPlaceSupplierActive = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.itemActive;
};
export const hasPlaceSupplierArchive = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.itemArchive;
};
export const hasPlaceSupplierBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceSupplier.itemBlocked;
};
//#endregion Supplier

//#region Parent
export const hasPlaceParent = () => {
  return store.getters.usersPrivilegeData.PlaceParent.view;
};
export const hasPlaceParentViewActive = () => {
  return store.getters.usersPrivilegeData.PlaceParent.viewActive;
};
export const hasPlaceParentViewArchive = () => {
  return store.getters.usersPrivilegeData.PlaceParent.viewArchived;
};
export const hasPlaceParentViewBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceParent.viewBlocked;
};

export const hasPlaceParentAdd = () => {
  return store.getters.usersPrivilegeData.PlaceParent.itemAdd;
};
export const hasPlaceParentEdit = () => {
  return store.getters.usersPrivilegeData.PlaceParent.itemUpdate;
};

export const hasPlaceParentDeleteImage = () => {
  return store.getters.usersPrivilegeData.PlaceParent.itemDeleteImage;
};
export const hasPlaceParentFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PlaceParent.itemFinaleDelete;
};

export const hasPlaceParentChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PlaceParent.changeActivationType;
};
export const hasPlaceParentActive = () => {
  return store.getters.usersPrivilegeData.PlaceParent.itemActive;
};
export const hasPlaceParentArchive = () => {
  return store.getters.usersPrivilegeData.PlaceParent.itemArchive;
};
export const hasPlaceParentBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceParent.itemBlocked;
};
//#endregion Parent

//#region Client
export const hasPlaceClient = () => {
  return store.getters.usersPrivilegeData.PlaceClient.view;
};
export const hasPlaceClientViewActive = () => {
  return store.getters.usersPrivilegeData.PlaceClient.viewActive;
};
export const hasPlaceClientViewArchive = () => {
  return store.getters.usersPrivilegeData.PlaceClient.viewArchived;
};
export const hasPlaceClientViewBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceClient.viewBlocked;
};

export const hasPlaceClientAdd = () => {
  return store.getters.usersPrivilegeData.PlaceClient.itemAdd;
};
export const hasPlaceClientEdit = () => {
  return store.getters.usersPrivilegeData.PlaceClient.itemUpdate;
};

export const hasPlaceClientDeleteImage = () => {
  return store.getters.usersPrivilegeData.PlaceClient.itemDeleteImage;
};
export const hasPlaceClientFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PlaceClient.itemFinaleDelete;
};

export const hasPlaceClientChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PlaceClient.changeActivationType;
};
export const hasPlaceClientActive = () => {
  return store.getters.usersPrivilegeData.PlaceClient.itemActive;
};
export const hasPlaceClientArchive = () => {
  return store.getters.usersPrivilegeData.PlaceClient.itemArchive;
};
export const hasPlaceClientBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceClient.itemBlocked;
};
//#endregion Client

//#region Other
export const hasPlaceOther = () => {
  return store.getters.usersPrivilegeData.PlaceOther.view;
};
export const hasPlaceOtherViewActive = () => {
  return store.getters.usersPrivilegeData.PlaceOther.viewActive;
};
export const hasPlaceOtherViewArchive = () => {
  return store.getters.usersPrivilegeData.PlaceOther.viewArchived;
};
export const hasPlaceOtherViewBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceOther.viewBlocked;
};

export const hasPlaceOtherAdd = () => {
  return store.getters.usersPrivilegeData.PlaceOther.itemAdd;
};
export const hasPlaceOtherEdit = () => {
  return store.getters.usersPrivilegeData.PlaceOther.itemUpdate;
};

export const hasPlaceOtherDeleteImage = () => {
  return store.getters.usersPrivilegeData.PlaceOther.itemDeleteImage;
};
export const hasPlaceOtherFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PlaceOther.itemFinaleDelete;
};

export const hasPlaceOtherChangeActivationType = () => {
  return store.getters.usersPrivilegeData.PlaceOther.changeActivationType;
};
export const hasPlaceOtherActive = () => {
  return store.getters.usersPrivilegeData.PlaceOther.itemActive;
};
export const hasPlaceOtherArchive = () => {
  return store.getters.usersPrivilegeData.PlaceOther.itemArchive;
};
export const hasPlaceOtherBlocked = () => {
  return store.getters.usersPrivilegeData.PlaceOther.itemBlocked;
};
//#endregion Other

//#endregion Places

//#region PlaceUser
export const hasPlaceUser = () => {
  return store.getters.usersPrivilegeData.PlaceUser.view;
};
export const hasPlaceUserAdd = () => {
  return store.getters.usersPrivilegeData.PlaceUser.itemAdd;
};

export const hasPlaceUserFinaleDelete = () => {
  return store.getters.usersPrivilegeData.PlaceUser.itemFinaleDelete;
};
//#endregion PlaceUser

//#region JobOrderStagesOfWorks
export const hasJobOrderStagesOfWork = () => {
  return store.getters.usersPrivilegeData.JobOrderStagesOfWork.view;
};

export const hasJobOrderStagesOfWorkAdd = () => {
  return store.getters.usersPrivilegeData.JobOrderStagesOfWork.itemAdd;
};
export const hasJobOrderStagesOfWorkFinish = () => {
  return store.getters.usersPrivilegeData.JobOrderStagesOfWork.finishStage;
};
export const hasJobOrderStagesOfWorkCancelFinish = () => {
  return store.getters.usersPrivilegeData.JobOrderStagesOfWork.cancleStage;
};

export const hasJobOrderStagesOfWorkFinaleDelete = () => {
  return store.getters.usersPrivilegeData.JobOrderStagesOfWork.itemFinaleDelete;
};

//#endregion JobOrderStagesOfWorks
