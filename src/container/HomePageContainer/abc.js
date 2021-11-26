import React, {Component} from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from 'react-infinite-scroller'

import "./styles.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error)
    //logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

class App extends Component {
  constructor (props) {
    super(props)

    const rows = []
    for (let i = 0; i < 1e4; i++) {
      rows.push({
        time: Date.now(),
        bar: 'beep',
        random: Math.random().toString(16).slice(2)
      })
    }
    let rowsRender = []
    let page = 1
    let nItems = 20

    this.state = {
      rows,
      rowsRender,
      hasMore: true,
      page,
      nItems,
    }
  }

  renderItem (item) {
    return (
      <div className="s-item" key={item.random}>
        {item.random}, {new Date(item.time).toLocaleTimeString()}
      </div>
    )
  }

  loadMore (i) {
    const {
      rows,
      rowsRender,
      page,
      nItems,
    } = this.state
    console.log(i, (i - 1) * nItems, i * nItems,{...this.state})
    const hasMore = rows.length > rowsRender.length
    if (!hasMore) return

    this.setState({
      page: i+1,
      rowsRender: rowsRender.concat(rows.slice((i-1)*nItems, i*nItems)),
      hasMore,
    })
  }
  
  render() {
    const {
      renderItem,
      loadMore,
    } = this

    const {
      rows,
      rowsRender,
      hasMore,
    } = this.state

    return (
      <div className="App">
        <h1>Infinite scroll</h1>

        <div className="scroll-box">
          <InfiniteScroll
            hasMore={hasMore}
            loadMore={(x) => {this.loadMore(x)}}
            useWindow={false}
          >
            {rowsRender.map(row => renderItem(row))}
          </InfiniteScroll>
        </div>

        <div className="space-box"></div>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, rootElement);
