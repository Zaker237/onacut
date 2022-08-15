import React from "react";
import { LINKS } from "../../assets/data/Links.data";
import { Accordion } from "../../components/accordion/Accordion.component";
import { MyDrawer } from "../../components/drawer/Drawer.component";
import {Footer} from "../../components/footer/Footer.component";
import { MyText } from "../../components/myText/MyText.component";
import { LANGUAGE } from "../../constants/language";

const Advices = () => {
    return (
        <div className="site__conseils bg-cover w-auto h-screen">
            <div className="px-4 md:px-20 pt-5 md:pt-0">
                <div className="container mx-auto">
                    <MyDrawer />
                    <main className="site__main pt-8 px-4 md:px-40">
                        <MyText
                            variant="title"
                            myText={LANGUAGE.info.title}
                            myTextColor="text-white"
                        />
                        <div className="w-full md:w-3/4 py-4">
                            <MyText
                                variant="normal"
                                myText={LANGUAGE.info.content}
                                myTextColor="text-white"
                            />
                        </div>
                        <MyText
                            variant="normal"
                            myText={LANGUAGE.info.link}
                            myTextColor="text-ind"
                        />
                        {LINKS.map((i: any) => (
                            <Accordion
                                title={i.title}
                                content={i.content.map((item: any) => item)}
                            />
                        ))}
                    </main>
                </div>
            </div>
						<Footer />
        </div>
    );
};

export default Advices;
