import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';

// Home
import { HomeHero } from './components/home/HomeHero';
import { FeaturedWork } from './components/home/FeaturedWork';
import { ContactSection } from './components/home/ContactSection';

// About
import { AboutHero, MyStory, SkillsExpertise, ToolsProcess, AboutContact } from './components/about/index';

// Shared
import { CinematicClosing } from './components/shared/CinematicClosing';

// Project 1 — LittleNest Booking
import { CinematicHero } from './components/cinematic/CinematicHero';
import { VisualProblem } from './components/cinematic/VisualProblem';
import { DesignVision } from './components/cinematic/DesignVision';
import { BrandWorld } from './components/cinematic/BrandWorld';
import { UserFlow } from './components/cinematic/UserFlow';
import { DesignEvolution } from './components/cinematic/DesignEvolution';
import { UIShowcase } from './components/cinematic/UIShowcase';
import { Impact } from './components/cinematic/Impact';

// Project 2 — LittleNest Evolution
import { CinematicHero2 } from './components/cinematic2/CinematicHero2';
import { Context } from './components/cinematic2/Context';
import { UserFeedback } from './components/cinematic2/UserFeedback';
import { ExistingFlow } from './components/cinematic2/ExistingFlow';
import { Solutions } from './components/cinematic2/Solutions';
import { BeforeAfter } from './components/cinematic2/BeforeAfter';
import { Outcome2 } from './components/cinematic2/Outcome2';
import { Learnings } from './components/cinematic2/Learnings';

// Project 3 — JioBusiness
import { CinematicHero3 } from './components/cinematic3/CinematicHero3';
import {
    PlatformContext,
    ProblemStatement3,
    ResearchInsights,
    DesignSolutions,
    BeforeAfter3,
    Outcome3,
    Learnings3,
} from './components/cinematic3/CinematicSections3';

// Project 4 — Child Development System
import { CinematicHero4 } from './components/cinematic4/CinematicHero4';
import {
    IntroductionVision,
    ProblemSpace,
    MyRole,
    DesignProcess4,
    Outcome4,
    Reflections4,
} from './components/cinematic4';

export default function App() {
    return (
        <div className="relative min-h-screen bg-[#0e0e0e] text-white">
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
                                <HomeHero onViewWork={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} />
                                <FeaturedWork />
                                <ContactSection />
                            </>
                        }
                    />

                    {/* ─── About ──────────────────────────────── */}
                    <Route
                        path="/about"
                        element={
                            <>
                                <AboutHero />
                                <MyStory />
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
                                <CinematicClosing nextProjectLink="/case-study/littlenest-evolution" />
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
                                <CinematicClosing nextProjectLink="/case-study/child-development" />
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
    );
}
