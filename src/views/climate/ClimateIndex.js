import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClimateHeader from './components/ClimateHeader';
import { useNavigate } from "react-router-dom";
import AuthUser from './AuthUser';
import Intro from './components/Intro';

import climateImage_1 from  './images/droplet.png';

const ClimateIndex = () => {
    const isActiveUser = AuthUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isActiveUser) {
            console.log('returning: ', isActiveUser);
            navigate("/climate/login");
        }
    });

  return (
    <section className="promo relative w-full flex flex-col items-center py-4x">
        <ClimateHeader title='Climate'/>
        <Intro />
        <div class="w-full max-w-7xl h-full flex flex-col items-center justify-start gap-6 mt-4 border-2 border-red-400 border-dashed rounded-3xl">
            <div class="md:h-screen" id="home">
                <div class="grid md:grid-cols-2 items-center md:mx-10 mx-5 md:mt-20 mt-32">
                    <div class="uppercase font-orbitron md:text-5xl text-3xl font-bold text-red-400 text-center"><span
                        class="mov">rwefdnionui</span>
                        <a data-smooth href="#climate" class="block mt-5 animate-pulse"><i class="fa-solid fa-angles-down"></i></a>
                    </div>
                    <div class=""><img src={climateImage_1} alt="" /></div>
                </div>
            </div>
            <div className='md:my-20 flex flex-col items-center w-full'>
                <div class="top-pink-border w-full"></div>
                <div class="w-full bg-gray-50" id="climate">
                    <div class="grid md:grid-cols-2 items-center">
                        <div class="">
                            <h2 class="text-center font-orbitron uppercase text-red-400 font-semibold pb-5">what is climate change?</h2>
                            <p class="text-red-400 text-center md:px-10 px-5">Climate change involves significant changes in average
                            conditions—such as temperature,
                            precipitation, wind
                            patterns, and other aspects of climate—that occur over years, decades, centuries, or longer. Climate change
                            involves
                            longer-term trends, such as shifts toward warmer, wetter, or drier conditions. These trends can be caused by
                            natural
                            variability in climate over time, as well as human activities that add greenhouse gases to the atmosphere like
                            burning fossil
                            fuels for energy.</p>
                            <a data-smooth href="#climate" class="block text-5xl font-bold text-red-400 text-center mt-5 animate-pulse"><i
                                class="fa-solid fa-angles-down"></i></a>

                        </div>
                        <div class="">
                            <iframe height="315" src="https://www.youtube.com/embed/WkvPdUtYhX8" class="w-full rounded-lg md:mx-0 mx-5"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:mx-10 md:my-20" id="causes">
                <div class="md:grid md:grid-cols-3 items-center mx-10 mt-20">
                <div class="md:mb-0 mb-5">
                    <h2 class="text-center font-orbitron uppercase text-red-400 font-semibold pb-5">causes of climate change?</h2>
                    <p class="text-red-400 text-center md:px-10">Since the Industrial Revolution, human activities have released large
                    amounts of carbon dioxide and other greenhouse
                    gases into the atmosphere, which has changed the earth’s climate. Natural processes, such as changes in the
                    sun's energy
                    and volcanic eruptions, also affect the earth's climate. However, they do not explain the warming that we have
                    observed
                    over the last century.</p>

                </div>
                <div class="col-span-2">
                    <div class="grid md:grid-cols-2 text-sm gap-5">
                    <div class="cause-card">
                        <h3 class="font-orbitron font-semibold">Heat-trapping Greenhouse Gases And The Earth's Climate</h3>
                        <p>Concentrations of the key greenhouse gases have all increased since the Industrial Revolution due to
                        human activities.
                        Carbon dioxide, methane, and nitrous oxide concentrations are now more abundant in the earth’s atmosphere
                        than any time
                        in the last 800,000 years.</p>
                    </div>
                    <div class="cause-card">
                        <h3 class="font-orbitron font-semibold">Reflectivity or Absorption of the Sun’s Energy</h3>
                        <p>Activities such as agriculture, road construction, and deforestation can change the reflectivity of the
                        earth's surface,
                        leading to local warming or cooling. This effect is observed in heat islands, which are urban centers that
                        are warmer
                        than the surrounding, less populated areas. One reason that these areas are warmer is that buildings,
                        pavement, and
                        roofs tend to reflect less sunlight than natural surfaces.</p>
                    </div>
                    <div class="cause-card">
                        <h3 class="font-orbitron font-semibold">Changes in the Earth’s Orbit and Rotation</h3>
                        <p>Changes in the earth’s orbit and its axis of rotation have had a big impact on climate in the past. For
                        example, the
                        amount of summer sunshine on the Northern Hemisphere, which is affected by changes in the planet’s orbit,
                        appears to be
                        the primary cause of past cycles of ice ages, in which the earth has experienced long periods of cold
                        temperatures (ice
                        ages), as well as shorter interglacial periods (periods between ice ages) of relatively warmer
                        temperatures</p>
                    </div>
                    <div class="cause-card">
                        <h3 class="font-orbitron font-semibold">Changes in the Earth’s Reflectivity</h3>
                        <p>The amount of sunlight that is absorbed or reflected by the planet depends on the earth’s surface and
                        atmosphere. Dark
                        objects and surfaces, like the ocean, forests, and soil, tend to absorb more sunlight. Light-colored
                        objects and
                        surfaces, like snow and clouds, tend to reflect sunlight. About 70 percent of the sunlight that reaches
                        the earth is
                        absorbed.18 Natural changes in the earth’s surface, like the melting of sea ice, have contributed to
                        climate change in
                        the past, often acting as feedbacks to other processes.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="md:mx-10 md:my-20" id="faq">
                <p class="text-center font-orbitron text-3xl uppercase py-10 font-semibold text-red-400">frequently asked questions
                </p>
                <div class="md:grid grid-cols-3 gap-4 mx-10 md:space-y-0 space-y-5">
                <div class="cause-card">
                    <h3 class="font-orbitron font-semibold">How is climate change affecting animals?</h3>
                    <p>Changing climates directly and indirectly cause stress to animals across the world. Many species are
                    approaching—or have
                    already reached—the limit of where they can go to find hospitable climates. In the polar regions, animals like
                    polar
                    bears that live on polar ice are now struggling to survive as that ice melts.</p>

                    <p>
                    It’s not just how climate change affects an animal directly; it’s about how the warming climate affects the
                    ecosystem
                    and food chain that animal has adapted to. In the U.S. and Canada, moose are struggling due to an increase in
                    ticks and
                    parasites that are surviving the shorter, milder winters.</p>
                </div>
                <div class="cause-card">
                    <h3 class="font-orbitron font-semibold">How is climate change affecting people?</h3>
                    <p>From straining agricultural systems to making regions less habitable, climate change is affecting people
                    everywhere. You
                    may have noticed how weather patterns near you are shifting or how more frequent and severe storms are
                    developing in the
                    spring. Maybe your community is experiencing more severe flooding or wildfires.</p>

                    <p>
                    Many areas are even experiencing “sunny day flooding” as rising sea levels cause streets to flood during high
                    tides. In
                    Alaska, some entire coastal communities are being moved because the sea level has risen to the point where
                    their
                    original location is no longer habitable.</p>
                </div>
                <div class="cause-card">
                    <h3 class="font-orbitron font-semibold">How is climate change affecting farms and our food?</h3>
                    <p>Climate change is disrupting weather patterns, leading to more extreme and frequent droughts and flooding
                    events that
                    directly threaten harvests. The warming climate is contributing to rising populations of insect pests that eat
                    a higher
                    share of crop yields.</p>

                    <p>
                    In the Midwestern United States, more frequent and intense rains have caused devastating spring flooding,
                    which
                    delays—and sometimes prevents—planting activities. These impacts make it more difficult for farmers to grow
                    crops and
                    sustain their livelihoods.</p>
                </div>
                </div>
            </div>

            <div class="md:mx-10 md:my-20" id="solutions">
                <div class="items-center mx-10 mt-20 space-y-5">
                <div class="md:mx-44">
                    <h2 class="text-center font-orbitron uppercase text-red-400 font-semibold pb-5 text-xl">solutions to climate
                    change?</h2>
                    <p class="text-red-400 text-center md:px-10">Changing our main energy sources to clean and renewable energy is the
                    best way to stop using fossil fuels. These include
                    technologies like solar, wind, wave, tidal and geothermal power. Switch to sustainable transport. Petrol and
                    diesel
                    vehicles, planes and ships use fossil fuels.</p>

                </div>
                <div class="">
                    <div class="grid md:grid-cols-4 text-sm gap-5 my-5">
                    <div class="card" data-aos="zoom-in">
                        <img src="../assets/images/solar.png" alt="" class="w-16 mb-5" />
                        <h3 class="font-orbitron font-semibold">Invest in renewable energy</h3>
                        <p>Changing our main energy sources to clean and renewable energy is the best way to stop using fossil
                        fuels. These include
                        technologies like solar, wind, wave, tidal and geothermal power.</p>
                    </div>
                    <div class="card" data-aos="zoom-in">
                        <img src="../assets/images/electric-car.png" alt="" class="w-16 mb-5 "/>
                        <h3 class="font-orbitron font-semibold">Switch to sustainable transport</h3>
                        <p>Petrol and diesel vehicles, planes and ships use fossil fuels. Reducing car use, switching to electric
                        vehicles and
                        minimising plane travel will not only help stop climate change, it will reduce air pollution too.</p>
                    </div>
                    <div class="card" data-aos="zoom-in">
                        <img src="../assets/images/room-heater.png" alt="" class="w-16 mb-5" />
                        <h3 class="font-orbitron font-semibold">Help us keep our homes cosy</h3>
                        <p>Homes shouldn’t be draughty and cold – it’s a waste of money, and miserable in the winter. The government
                        can help
                        households heat our homes in a green way – such as by insulating walls and roofs and switching away from
                        oil or gas
                        boilers to heat pumps.</p>
                    </div>
                    <div class="card" data-aos="zoom-in">
                        <img src="../assets/images/underground.png" alt="" class="w-16 mb-5" />
                        <h3 class="font-orbitron font-semibold">Keep fossil fuels in the ground</h3>
                        <p>Fossil fuels include coal, oil and gas – and the more that are extracted and burned, the worse climate
                        change will get.
                        All countries need to move their economies away from fossil fuels as soon as possible.</p>
                    </div>
                    <div class="card" data-aos="zoom-in">
                        <img src="../assets/images/harvest-farming.png" alt="" class="w-16 mb-5" />
                        <h3 class="font-orbitron font-semibold">Improve farming and encourage vegan diets</h3>
                        <p>One of the best ways for individuals to help stop climate change is by reducing their meat and dairy
                        consumption, or by
                        going fully vegan. Businesses and food retailers can improve farming practices and provide more
                        plant-based products to
                        help people make the shift.</p>
                    </div>
                    <div class="card" data-aos="zoom-in">
                        <img src="../assets/images/plant-pot.png" alt="" class="w-16 mb-5" />
                        <h3 class="font-orbitron font-semibold">Restore nature to absorb more carbon</h3>
                        <p>The natural world is very good at cleaning up our emissions, but we need to look after it. Planting trees
                        in the right
                        places or giving land back to nature through ‘rewilding’ schemes is a good place to start.</p>
                    </div>
                    <div class="card" data-aos="zoom-in">
                        <img src="../assets/images/rainforest.png" alt="" class="w-16 mb-5" />
                        <h3 class="font-orbitron font-semibold">Protect forests like the Amazon</h3>
                        <p>Forests are crucial in the fight against climate change, and protecting them is an important climate
                        solution. Cutting
                        down forests on an industrial scale destroys giant trees which could be sucking up huge amounts of carbon.
                        </p>
                    </div>
                    <div class="card" data-aos="zoom-in">
                        <img src="../assets/images/ocean.png" alt="" class="w-16 mb-5" />
                        <h3 class="font-orbitron font-semibold">Protect the oceans</h3>
                        <p>Oceans also absorb large amounts of carbon dioxide from the atmosphere, which helps to keep our climate
                        stable. But many
                        are overfished, used for oil and gas drilling or threatened by deep sea mining.</p>
                    </div>
                    <div class="card" data-aos="zoom-in">
                        <img src="../assets/images/plastic.png" alt="" class="w-16 mb-5" />
                        <h3 class="font-orbitron font-semibold">Reduce plastic</h3>
                        <p>Plastic is made from oil, and the process of extracting, refining and turning oil into plastic (or even
                        polyester, for
                        clothing) is surprisingly carbon-intense. It doesn’t break down quickly in nature so a lot of plastic is
                        burned, which
                        contributes to emissions.</p>
                    </div>

                    </div>
                </div>
                </div>
            </div>

            <div class="bg-secondary py-20 text-center space-y-4 md:space-y-10 relative">
                <p class="font-bold md:text-3xl text-xl md:px-64 px-10 font-orbitron uppercase text-primary">Help save the planet by
                challenging
                yourself to be a solution to climate change</p>
                <div class="flex items-center justify-center">
                <a href="../challenge/index.html"
                    class="uppercase bg-white text-red-400 border-2 border-dashed border-red-400 px-10 py-3 rounded-full font-semibold">join the
                    challenge</a>
                </div>
                <img src="../assets/images/rangoli.png" class="absolute top-0 left-0 w-32 md:block hidden" alt=""
                data-aos="zoom-in" />
                <img src="../assets/images/rangoli.png" class="absolute bottom-0 right-0 w-32 md:block hidden" alt=""
                data-aos="zoom-in" />
            </div>
            <div class="md:mx-10 w-full max-w-5xl" id="faq">
                <p class="text-center font-orbitron text-3xl uppercase py-10 font-semibold text-red-400">more on climate</p>
                <div class="md:grid grid-cols-3 gap-5 md:space-y-0 space-y-5">
                    <div class="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/jAa58N4Jlos" class="w-full rounded-lg md:mx-0 mx-5"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div class="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/G4H1N_yXBiA" class="w-full rounded-lg md:mx-0 mx-5"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div class="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/Sv7OHfpIRfU" class="w-full rounded-lg md:mx-0 mx-5"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div class="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/tykLKCT7DyY" class="w-full rounded-lg md:mx-0 mx-5"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div class="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/cn9PhiDJp-A" class="w-full rounded-lg md:mx-0 mx-5"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div class="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/JgvDuLcL4yQ" class="w-full rounded-lg md:mx-0 mx-5"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ClimateIndex