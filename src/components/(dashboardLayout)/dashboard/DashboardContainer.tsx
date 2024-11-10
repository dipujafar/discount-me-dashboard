import EaringOverviewChart from "./EaringOverviewChart";
import ProductSellChart from "./ProductSellChart";
import RecentUser from "./RecentUser";

import StatisticBar from "./StatisticBar";

const DashboardContainer = () => {
  return (
    <div className="space-y-7">
      <StatisticBar></StatisticBar>
      <div className="flex gap-x-8">
        <ProductSellChart></ProductSellChart>
        <EaringOverviewChart></EaringOverviewChart>
      </div>
      <RecentUser></RecentUser>
    </div>
  );
};

export default DashboardContainer;
