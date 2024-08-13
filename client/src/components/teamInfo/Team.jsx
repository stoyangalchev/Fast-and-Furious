import styles from "./Team.module.css";

const Team = () => {

    return (
        <div className={styles.container}>
            <div>
                <img
                    className={styles.fastfive}
                    src="/img/team/fast-and-furious-future.jpg"
                    alt=""

                />
            </div>
            <div className={styles.header}>
                <h1 className={styles.heading}>
                    <span className={styles.highlight}>Fast & Furious</span> Crew
                </h1>
            </div>
            <div className={styles.gallery}>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgWrapper}>
                                <img
                                    className={styles.img}
                                    src="img/team/vin-diesel.avif"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.detailsWrapper}>
                                <h4 className={styles.crewName}>Dominic Toretto</h4>
                                <span>Alfa</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgWrapper}>
                                <img
                                    className={styles.img}
                                    src="img/team/michele-rodrigues.avif"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.detailsWrapper}>
                                <h4 className={styles.crewName}>Letty Ortiz</h4>
                                <span>Lady Alfa</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgWrapper}>
                                <img
                                    className={styles.img}
                                    src="img/team/paul-walker.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.detailsWrapper}>
                                <h4 className={styles.crewName}>Brian O'Conner</h4>
                                <span>FBI agent</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgWrapper}>
                                <img
                                    className={styles.img}
                                    src="img/team/jhon-cena.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.detailsWrapper}>
                                <h4 className={styles.crewName}>Jakob Toretto</h4>
                                <span>Dom's brother</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgWrapper}>
                                <img className={styles.img} src="img/team/mia.png" alt="" />
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.detailsWrapper}>
                                <h4 className={styles.crewName}>Mia Toretto</h4>
                                <span>Dom's sister</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgWrapper}>
                                <img className={styles.img} src="img/team/tech.png" alt="" />
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.detailsWrapper}>
                                <h4 className={styles.crewName}>Tej Parker</h4>
                                <span>Tech guy</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgWrapper}>
                                <img className={styles.img} src="img/team/ramsey.png" alt="" />
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.detailsWrapper}>
                                <h4 className={styles.crewName}>Ramsey</h4>
                                <span>Computer hacker</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgWrapper}>
                                <img className={styles.img} src="img/team/roman.png" alt="" />
                            </div>
                        </div>

                        <div className={styles.detailsContainer}>
                            <div className={styles.detailsWrapper}>
                                <h4 className={styles.crewName}>Roman Pearce</h4>
                                <span>Joker</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team