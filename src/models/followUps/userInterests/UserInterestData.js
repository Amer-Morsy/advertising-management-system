export default class UserInterestData {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.countTotalInterestsEducational = "";
    this.countInterestsEducationalCategories = "";
    this.countInterestsEducationalCategoriesPercentage = "";
    this.countInterestsEducationalCategoriesText = "";
    this.countInterestsOtherEducationalCategories = "";
    this.countInterestsOtherEducationalCategoriesPercentage = "";
    this.countInterestsOtherEducationalCategoriesText = "";
    this.countTotalInterestsEducationalJoiningApp = "";
    this.countEducationalJoiningAppApproved = "";
    this.countEducationalJoiningAppApprovedPercentage = "";
    this.countEducationalJoiningAppApprovedText = "";
    this.countEducationalJoiningAppRejected = "";
    this.countEducationalJoiningAppRejectedPercentage = "";
    this.countEducationalJoiningAppRejectedText = "";
    this.countEducationalJoiningAppUnderReview = "";
    this.countEducationalJoiningAppUnderReviewPercentage = "";
    this.countEducationalJoiningAppUnderReviewText = "";
    this.lastUpdateUserInterestsDateTime = "";
    this.lastUpdateUserInterestsDateTimeCustomized = "";
    this.lastUpdateUserInterestsDate = "";
    this.lastUpdateUserInterestsTime = "";
    this.lastUpdateUserInterestsFromText = "";
  }
  fillData(data) {
    if (data) {
      this.countTotalInterestsEducational =
        data.countTotalInterestsEducational ?? "";
      this.countInterestsEducationalCategories =
        data.countInterestsEducationalCategories ?? "";
      this.countInterestsEducationalCategoriesPercentage =
        data.countInterestsEducationalCategoriesPercentage ?? "";
      this.countInterestsEducationalCategoriesText =
        data.countInterestsEducationalCategoriesText ?? "";
      this.countInterestsOtherEducationalCategories =
        data.countInterestsOtherEducationalCategories ?? "";
      this.countInterestsOtherEducationalCategoriesPercentage =
        data.countInterestsOtherEducationalCategoriesPercentage ?? "";
      this.countInterestsOtherEducationalCategoriesText =
        data.countInterestsOtherEducationalCategoriesText ?? "";
      this.countTotalInterestsEducationalJoiningApp =
        data.countTotalInterestsEducationalJoiningApp ?? "";
      this.countEducationalJoiningAppApproved =
        data.countEducationalJoiningAppApproved ?? "";
      this.countEducationalJoiningAppApprovedPercentage =
        data.countEducationalJoiningAppApprovedPercentage ?? "";
      this.countEducationalJoiningAppApprovedText =
        data.countEducationalJoiningAppApprovedText ?? "";
      this.countEducationalJoiningAppRejected =
        data.countEducationalJoiningAppRejected ?? "";
      this.countEducationalJoiningAppRejectedPercentage =
        data.countEducationalJoiningAppRejectedPercentage ?? "";
      this.countEducationalJoiningAppRejectedText =
        data.countEducationalJoiningAppRejectedText ?? "";
      this.countEducationalJoiningAppUnderReview =
        data.countEducationalJoiningAppUnderReview ?? "";
      this.countEducationalJoiningAppUnderReviewPercentage =
        data.countEducationalJoiningAppUnderReviewPercentage ?? "";
      this.countEducationalJoiningAppUnderReviewText =
        data.countEducationalJoiningAppUnderReviewText ?? "";
      this.lastUpdateUserInterestsDateTime =
        data.lastUpdateUserInterestsDateTime ?? "";
      this.lastUpdateUserInterestsDateTimeCustomized =
        data.lastUpdateUserInterestsDateTimeCustomized ?? "";
      this.lastUpdateUserInterestsDate = data.lastUpdateUserInterestsDate ?? "";
      this.lastUpdateUserInterestsTime = data.lastUpdateUserInterestsTime ?? "";
      this.lastUpdateUserInterestsFromText =
        data.lastUpdateUserInterestsFromText ?? "";
    } else {
      this.setInitialValue();
    }
  }
}
