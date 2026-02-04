# Specification for history api support

Implement support for Signal K history api, as described in history.json OpenApi specification so that graphs check for the existence of History API on the server and if it is present prime the dataset for the graph from the server.


I'd like to create a new Angular history-api service with interfaces and methods that the api has to offer so that it can be reused anywhere in KIP

It should be wired up to data-set service and feed the shareReplay observable so it does not change how chart components work. That way we could feed history to all consumers without touching the code. 

The handoff to components is at the shareReplay observable.

In data-set service there is a recently modified timescale to datapoint algorithm. I changed it because since the data is for the charts and for visual presentation, we don't need more points than we can visually benefit from. Ie. a month's worth of data sliced in 1 min increment is just noise when drawn on the chart. The algorithm sticks to a number of points and determines the time slice.

Data-set service runs data-set collection in the background. They start the first time you load each widget. They only stops and restarts after you edit the widget property. It collects until the app is stopped or the widget removed. So essentially there will only be one history api call per widget, unless you edit the widget config.

I don't think we need any new chart config options for history. If you configured 10 minutes of chart data, the past 10 min should be grabbed from history on each data-set startup.