function navbar()
{
    return `
<div>
    <div class="logo">
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png">
        <div class="caption">
            <div class="flex">
                <p>Explore</p>
                <p>Plus</p>
            </div>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png">
        </div>
    </div>
    <div>
        <input type="text" placeholder="Search for products,brand and more" id="searchbox">
        <span class="material-icons" id = "search_icon">search</span>
    </div>
</div>
<div>
    <p class = "login">Login</p>
    <div class="flex">
        <p class = "text" id= "more">More</p>
        <span class="material-icons micon">arrow_drop_down</span>
        <ul class = "dropdown">
            <li><span class="material-icons">notifications</span> Notification Preferances</li>
            <li><span class="material-icons">shopping_bag</span> Sell on Flipkart</li>
            <li><span class="material-icons">support_agent</span> 24x7 Customer Care</li>
            <li><span class="material-icons">moving</span> Advertise</li>
            <li><span class="material-icons">get_app</span> Download App</li>
    </div>
    <div class="flex">
        <span class="material-icons">shopping_cart</span>
        <p class = "text">Cart</p>
    </div>
</div>`;
}

export default navbar;