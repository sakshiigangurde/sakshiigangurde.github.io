import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import { LayoutGroup } from 'motion/react';

// Home
import HeroAndCaseStudies from './components/home/HeroAndCaseStudies';
import Process from './components/home/Process';
import About from './components/home/About';
import LifeOutside from './components/home/LifeOutside';
import Footer from './components/home/Footer';

// About
import { AboutHero, HowIGotHere, SkillsExpertise, ToolsProcess, AboutContact } from './components/about/index';

// Shared
import { CinematicClosing } from './components/shared/CinematicClosing';

// Project 1 — LittleNest Booking
import { CinematicHero } from './components/littlenest-booking/CinematicHero';
import { VisualProblem } from './components/littlenest-booking/VisualProblem';
import { DesignVision } from './components/littlenest-booking/DesignVision';
import { BrandWorld } from './components/littlenest-booking/BrandWorld';
import { UserFlow } from './components/littlenest-booking/UserFlow';
import { DesignEvolution } from './components/littlenest-booking/DesignEvolution';
import { UIShowcase } from './components/littlenest-booking/UIShowcase';
import { Impact } from './components/littlenest-booking/Impact';

// Project 2 — LittleNest Evolution
import { CinematicHero2 } from './components/littlenest-evolution/CinematicHero2';
import { Context } from './components/littlenest-evolution/Context';
import { UserFeedback } from './components/littlenest-evolution/UserFeedback';
import { ExistingFlow } from './components/littlenest-evolution/ExistingFlow';
import { Solutions } from './components/littlenest-evolution/Solutions';
import { BeforeAfter } from './components/littlenest-evolution/BeforeAfter';
import { Outcome2 } from './components/littlenest-evolution/Outcome2';
import { Learnings } from './components/littlenest-evolution/Learnings';

// Project 3 — JioBusiness
import { CinematicHero3 } from './components/jiobusiness/CinematicHero3';
import {
    PlatformContext,
    ProblemStatement3,
    ResearchInsights,
    DesignSolutions,
    BeforeAfter3,
    Outcome3,
    Learnings3,
} from './components/jiobusiness/CinematicSections3';

// Project 4 — Child Development System
import { CinematicHero4 } from './components/child-development/CinematicHero4';
import {
    IntroductionVision,
    ProblemSpace,
    MyRole,
    DesignProcess4,
    Outcome4,
    Reflections4,
} from './components/child-development';
// Digital Purchase Journey
import {
    Hero,
    OfflineToOnline,
    ProblemStatement,
    MyRole as DigitalPurchaseMyRole,
    DesignProcess,
    UIShowcase as DigitalPurchaseUIShowcase,
    Reflections
} from './components/digital-purchase';

export default function App() {
    return (
        <LayoutGroup>
            <div className="relative min-h-screen bg-[#0e0e0e] text-white overflow-x-hidden w-full">
                <ScrollToTop />
                <SmoothScroll />
                <Navigation />

                {/* Add top padding to clear floating nav */}
                <div className="relative pt-20">
                    <Routes>
                        {/* ─── Home ───────────────────────────────── */}
                        <Route
                            path="/"
                            element={
                                <>
                                    <HeroAndCaseStudies />
                                    <Process />
                                    <About />
                                    <LifeOutside />
                                    <Footer />
                                </>
                            }
                        />

                    {/* ─── About ──────────────────────────────── */}
                    <Route
                        path="/about"
                        element={
                            <>
                                <AboutHero />

                                <HowIGotHere />
                                <SkillsExpertise />
                                <ToolsProcess />
                                <AboutContact />
                            </>
                        }
                    />

                    {/* ─── Project 1 — LittleNest Booking ─────── */}
                    <Route
                        path="/case-study/littlenest-booking"
                        element={
                            <>
                                <CinematicHero />
                                <VisualProblem />
                                <DesignVision />
                                <BrandWorld />
                                <UserFlow />
                                <DesignEvolution />
                                <UIShowcase />
                                <Impact />
                                <CinematicClosing nextProjectLink="/case-study/child-development" />
                            </>
                        }
                    />

                    {/* ─── Project 2 — LittleNest Evolution ─────── */}
                    <Route
                        path="/case-study/littlenest-evolution"
                        element={
                            <>
                                <CinematicHero2 />
                                <Context />
                                <UserFeedback />
                                <ExistingFlow />
                                <Solutions />
                                <BeforeAfter />
                                <Outcome2 />
                                <Learnings />
                                <CinematicClosing nextProjectLink="/case-study/jiobusiness" />
                            </>
                        }
                    />

                    {/* ─── Project 3 — JioBusiness ─────────────── */}
                    <Route
                        path="/case-study/jiobusiness"
                        element={
                            <>
                                <CinematicHero3 />
                                <PlatformContext />
                                <ProblemStatement3 />
                                <ResearchInsights />
                                <DesignSolutions />
                                <BeforeAfter3 />
                                <Outcome3 />
                                <Learnings3 />
                                <CinematicClosing nextProjectLink="/case-study/digital-purchase" />
                            </>
                        }
                    />

                    {/* ─── Digital Purchase Journey ─────────────── */}
                    <Route
                        path="/case-study/digital-purchase"
                        element={
                            <>
                                <Hero />
                                <OfflineToOnline />
                                <ProblemStatement />
                                <DigitalPurchaseMyRole />
                                <DesignProcess />
                                <DigitalPurchaseUIShowcase />
                                <Reflections />
                                <CinematicClosing nextProjectLink="/case-study/littlenest-booking" />
                            </>
                        }
                    />

                    {/* ─── Project 4 — Child Development ────────── */}
                    <Route
                        path="/case-study/child-development"
                        element={
                            <>
                                <CinematicHero4 />
                                <IntroductionVision />
                                <ProblemSpace />
                                <MyRole />
                                <DesignProcess4 />
                                <Outcome4 />
                                <Reflections4 />
                                <CinematicClosing />
                            </>
                        }
                    />
                </Routes>
            </div>
        </div>
        </LayoutGroup>
    );
}
