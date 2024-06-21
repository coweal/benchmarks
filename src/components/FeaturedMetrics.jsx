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
  9.34, 10.08, 4.5, 
  "%",
  "Stickiness", 
  "DAU/MAU * 100.",
  "How many of monthly active users that are active on a given day. We calculate it daily and then average over the month. Monthly active users is calculated as a sliding 30-day window."
);
var utilisation = new Metric(
  45.78, 48.12, 38.27,
  "%",
  "Utilisation",
  "DAU / Users alive * 100",
  "How many users are active among those who could act (i.e. users who we consider not churned)."
);
var time_to_answer = new Metric(
  31.78, 29.93, 37.60,
  " hrs",
  "Time to the first answer",
  "",
  "Time between starting a discussion and the first reply appearing in it."
);
var churn_rate = new Metric(
  21.15, 21.14, 21.20,
  "%",
  "Churn rate",
  "Users left / Users alive * 100",
  "How many users left the community among those whom we consider alive."
);
var community_growth = new Metric(
  3.37, 4.57, -0.49,
  "%",
  "Community growth rate",
  "",
  "How fast the number of alive users is growing."
);

var metrics = [stickiness, utilisation, time_to_answer, churn_rate, community_growth];

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