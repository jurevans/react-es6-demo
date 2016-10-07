rc.dashboardPageComponent = React.createClass({
	getInitialState:function(){
        if(!app.stores.dashboard){
            app.stores.dashboard = {
                mycourses: {
                    courses: [
                        {
                            course_id: 'Psych101',
                            title: 'Psychology Product Name',
                            book: 'Psychology, 10th Edition, Myers',
                            product: 'LearningCurve',
                            cover: 'https://d67woptvev43m.cloudfront.net/Images/1709887/myers11einmodules_cover.jpg'
                        },
                        {
                            course_id: 'Econ101',
                            title: 'Economics Product Name',
                            book: 'Book title goes here',
                            product: 'FlipIt + Sapling',
                            cover: ''
                        },
                        {
                            course_id: 'English101',
                            title: 'English Product Name',
                            book: 'Book title goes here',
                            product: 'Writing Tools + Diagnostics',
                            cover: ''
                        },
                        {
                            course_id: 'Chem101',
                            title: 'Chemistry Product Name',
                            book: 'Book title goes here',
                            product: 'Diagnostics + Sapling',
                            cover: ''
                        }
                    ]
                }
            };
        }
        return app.stores.dashboard;
    },    
    render:function(){

        var mycourses = [];
        _.each(app.stores.dashboard.mycourses.courses, function(course){
            mycourses.push(
                <rc.dashboardCourseComponent ref={course.course_id} key={course.course_id} course={course} />
            );
        });

        return (
            <div id="dashboard" className="container">
                <header className="dashHeader">My courses</header>
            	{mycourses}
            </div>
        );
    }
});