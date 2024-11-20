import EaringOverviewChart from "./EaringOverviewChart";
import ProductSellChart from "./ProductSellChart";
import RecentUser from "./RecentUser";

import StatisticBar from "./StatisticBar";

const DashboardContainer = () => {
  return (
    <div className="space-y-7">
      <StatisticBar></StatisticBar>
      <div className="flex flex-col xl:flex-row xl:gap-x-8 gap-x-4 gap-y-5">
        <ProductSellChart></ProductSellChart>
        <EaringOverviewChart></EaringOverviewChart>
      </div>
      <RecentUser></RecentUser>
    </div>
  );
};

export default DashboardContainer;
