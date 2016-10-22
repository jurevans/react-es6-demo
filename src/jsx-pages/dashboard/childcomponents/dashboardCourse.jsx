rc.dashboardCourseComponent = React.createClass({
	getDefaultProps:function(){
        return {
            course:{
                course_id: '',
                title: '',
                book: '',
                product: '',
                cover: SiteConfig.assetsDirectory + 'images/site/bookcover.png'
            }
        }
    },
    render:function(){



        return (
            <div className="course flex row">
                <div className="bookcover col-xs-4 col-sm-2 col-md-2">
                    <img src={this.props.course.cover ? this.props.course.cover : SiteConfig.assetsDirectory + 'images/site/bookcover.png'} />
                </div>
                <div className="courseinfo col-xs-8 col-sm-7 col-md-7">
                    <span className="coursetitle">{this.props.course.title}</span>
                    <br />
                    <span className="coursebook">{this.props.course.book}</span>
                    <br />
                    <span className="courseproduct">{this.props.course.product}</span>
                </div>
                <div className="coursebutton col-xs-12 col-sm-3 col-md-3">
                    <button className="enterproduct">Enter product</button>
                </div>
            </div>
        );
    }
});