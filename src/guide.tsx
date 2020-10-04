import * as React from "react";
import * as  ReactDOM from "react-dom";
import "./guide.css";

interface IGuideItem {
  btnText: string;
  onClick: (index: number) => void;
  node: React.ReactNode;
}
type GuideList = IGuideItem[];

interface IProps {
  guideList?: GuideList;
}
interface IState {
  index: number;
  len: number;
}

class Guide extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    const { guideList = [] } = this.props;
    this.state = {
        index: 0,
        len: guideList.length,
      };
  }
  public handleClick = () => {
    const { index, len } = this.state;
    const { guideList = [] } = this.props;
    const {  onClick  } = guideList && guideList[0] || {};
    if (typeof onClick === "function") {
      onClick(index);
    }
    const nextIndex = index + 1;
    this.setState({index: nextIndex});
    if (nextIndex === len) {
      guide.hide();
    }
  }
  public render() {
    const { guideList = [] } = this.props;
    const item = guideList && guideList[this.state.index] || {};
    return (
        <>
          {item.node}
          <div className="guide-btn-wrap">
            <p
              onClick={this.handleClick}
              className="guide-btn-action"
            >
              {item.btnText}
            </p>
          </div>
        </>
      );
    }
}
let node: HTMLDivElement | null = null;
const guide = {
  show(list: GuideList) {
    node = document.createElement("div");
    document.body.appendChild(node);
    node.className = "guide-wrap";
    ReactDOM.render(<Guide guideList={list} />, node);
  },
  hide() {
    if (!node) { return; }
    ReactDOM.unmountComponentAtNode(node);
    document.body.removeChild(node);
    node = null;
  },
};
export default guide;
