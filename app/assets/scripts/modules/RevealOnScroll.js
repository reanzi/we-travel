import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $(".feature-item");
        console.log(this);
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        this.itemsToReveal.each(function () {
            var currentItem = this;
            new Waypoint({
                element: currentItem, // DOM el
                handler: function () {
                    $(currentItem).addClass("reveal-item--is-visible");
                },  // things to happen
                offset: "80%"
            });
        });
    }

}
export default RevealOnScroll;