Ext.define('FavorITe.view.Carousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'carouselFavor'

    config : {

        title : 'Title',
        height: '100%',
        jumpToIndex: 0,
        flex: '1',

        defaults : {
            padding: '10 10 10 10'
        },

        items : [
            {
                html:"<div style='text-align:center'>FavorITe is your favorite app to ask for favors. Running late for class and want someone to pick you a Starbucks? Craving for a waffle at 1am in the morning but too lazy to go get one yourself? Or just want a ride? Favor IT!</div>"
            },
            {
                html:"<div style='text-align:center'>With FavorITe, you can now complete favors and earn money! Great, isn't it? </div>"
            },
            {
                html:"<div style='text-align:center'>Is it safe? Oh yeah, only someone with a GTID can use this app.</div>"
            }
        ]
    }
});