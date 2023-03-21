export function About() {
    return (
        <section>
            <div className="about-section">
            <div className="about-container">
                <div className="content-section">
                    <div className="title">
                        <h1>About Hansa</h1>
                    </div>
                    <div className="about-content">
                        <h3>Little story about Hansa</h3>
                        <p>Once upon a time, there was a young woman named Hansa who loved to cook. She had a talent for
                            creating delicious meals and had always dreamed of sharing her passion with the world.

                            One day, Hansa had an idea: what if she could create an app that would make it easy for
                            people
                            to share their own recipes with each other? She spent countless hours developing the app,
                            carefully curating a selection of her favorite recipes and creating a platform where users
                            could
                            share and discover new recipes.

                            When the app was finally ready, Hansa was thrilled to share it with the world. She called it
                            "Hansa's Recipe App," and she knew that it had the potential to help people all over the
                            world
                            discover new and delicious meals.
                        </p>
                    </div>
                    <div className="social">
                        <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="#"> <ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                </div>
                <div className="image-section">
                    <img src="/images/hansa-picture.jpg" alt="hansa picture" />
                </div>
            </div>
        </div>
        </section>
    )
}