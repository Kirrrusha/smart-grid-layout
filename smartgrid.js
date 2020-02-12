module.exports = {
	columns: 12,
	offset: "30px", //2.75%
	//mobileFirst: true,
	container: {
        maxWidth: "1080px",
        fields: "30px"
    },
	breakPoints: {
		md: {
            width: "920px"
        },
        sm: {
            width: "720px",
            fields: "15px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "400px",
            /*
            offset: "10px",
            fields: "5px"
            */
        }
	},
	//detailedCalc: true
};