import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

export default function About() {

    return <section className="about">

        <div className="about-pages">

            <div>
                <h2>Project 1</h2>
                <p>Lorem Ipsum është një tekst shabllon i industrisë
                së printimit dhe shtypshkronjave. Lorem Ipsum ka
                qenë teksti shabllon i industrisë që nga vitet 1500
                , kur një shtypës i panjohur morri një galeri shkrimesh
                dhe i ngatërroi për të krijuar një libër mostër.</p>
            </div>
            <div>
                <h2>Project 2</h2>
                <p>Lorem Ipsum është një tekst shabllon i industrisë
                së printimit dhe shtypshkronjave. Lorem Ipsum ka
                qenë teksti shabllon i industrisë që nga vitet 1500
                , kur një shtypës i panjohur morri një galeri shkrimesh
                dhe i ngatërroi për të krijuar një libër mostër.</p>
            </div>
            <div>
                <h2>Project 3</h2>
                <p>Lorem Ipsum është një tekst shabllon i industrisë
                së printimit dhe shtypshkronjave. Lorem Ipsum ka
                qenë teksti shabllon i industrisë që nga vitet 1500
                , kur një shtypës i panjohur morri një galeri shkrimesh
                dhe i ngatërroi për të krijuar një libër mostër.</p>
            </div>

        </div>

        <Controller>
            <Scene duration={1800} pin=".projects-title">
                <div className="projects-title">
                    <h2> PROJECTS </h2>
                </div>
            </Scene>
        </Controller>

    </section>

}