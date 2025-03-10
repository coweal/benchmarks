import './../css/components/FeaturedMetrics.css'

class Metric {
  constructor(total, up, down, units, name, short_desc, desc) {
    this.total = total;
    this.up = up;
    this.down = down;
    this.units = units;
    this.name = name;
    this.short_desc = short_desc;
    this.desc = desc;
  }
}
// TBD: Make it so the numbers get updated from a file
var stickiness = new Metric(
  7.93, 8.22, 6.95, 
  "%",
  "Stickiness", 
  "", // DAU/MAU * 100.
  "How many monthly active users that are active on a given day. We calculate it daily and then average over the month. Monthly active users is calculated as a sliding 30-day window."
);

var time_to_answer = new Metric(
  31.46, 29.70, 37.49,
  " hrs",
  "Time to the first answer",
  "",
  "Time between starting a discussion and the first reply appearing in it."
);

var dau = new Metric(
  18, 23, 12,
  "%",
  "Daily active users",
  "",
  "The number of users who have been active in the community during a day."
);

var daily_utilisation = new Metric(
  4.56, 5.78, 2.89,
  "%",
  "Daily user base utilisation",
  "",
  "The percent of active users among those who are alive, calculated daily."
);

var daily_churn = new Metric(
  0.79, 0.91, 0.57,
  "%",
  "Daily user churn",
  "",
  "The rate at which users stop participating in a community, calculated daily."
);

var daily_growth = new Metric(
  0.1, 0.23, 0.02,
  "%",
  "Daily user growth",
  "",
  "The rate at which users start participating in the community."
);

var mau = new Metric(
  209, 270, 136,
  "users",
  "Monthly active users",
  "",
  "The number of users who have posted in the community."
);

var montly_utilisation = new Metric(
  36.91, 43.98, 28.21,
  "%",
  "Monthly user base utilisation",
  "", 
  "The percent of active users among those who are alive, calculated monthly"
);

var monthly_churn = new Metric(
  15.76, 17.6, 13.51,
  "%",
  "Monthly user churn",
  "", // Users left / Users alive * 100
  "The rate at which users stop participating in a community, calculated monthly"
);

var montly_growth = new Metric(
  15.14, 27.89, -0.35,
  "%",
  "Monthly user growth",
  "",
  "The rate at which users start participating in the community."
);

var new_users_monthly = new Metric(
  94, 125, 56,
  "users",
  "New active users monthly",
  "",
  "The number of users who performed their first action on the platform during a given month."
);

var user_tenure = new Metric(
  54.27, 65.52, 40.97,
  "months",
  "User tenure by month",
  "",
  "Time between the first and the last actions of a user in the community."
);

var num_of_actions = new Metric(
  11.72, 14.76, 8.03,
  "actions",
  "Number of actions by month",
  "",
  "Total number of actions performed by a user during their tenure."
);

var metrics = [stickiness, time_to_answer, dau, daily_utilisation, daily_churn, daily_growth, mau, montly_utilisation, monthly_churn, montly_growth, new_users_monthly, user_tenure, num_of_actions];

function FeaturedMetrics() {
  return (
    <div className="featuredMetrics">
{ metrics.map(metric => (
      <div className="featuredItem">
        <div className='futuredNameContainer'>
          <span className="featuredName">{ metric.name }</span>
          <span className="featuredShortDesc">{ metric.short_desc }</span>
        </div>
        <div className="featuredMetricValueContainer">
          <span className="featuredMetricValue">{ metric.total }{ metric.units }</span>
          <span className="featuredMetricSplit">
            growth { metric.up }{ metric.units }<br/>
            decline { metric.down }{ metric.units }
          </span>
        </div>
        <div className='featuredDesc'>
          <span className='featuredDescValue'>
            { metric.desc }
          </span>
        </div>
        
      </div>
))}
    </div>
  );
}

export default FeaturedMetrics;