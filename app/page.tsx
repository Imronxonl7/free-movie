import HomeActors from "@/components/home/HomeActors"
import HomeCountriesMovies from "@/components/home/HomeCountriesMovies"
import HomeHero from "@/components/home/HomeHero"
import HomeHeroCategory from "@/components/home/HomeHeroCategory"
import HomeIndianMovies from "@/components/home/HomeIndianMovies"
import HomeNewMovies from "@/components/home/HomeNewMovies"
import HomeNewParts from "@/components/home/HomeNewParts"
import HomeSerials from "@/components/home/HomeSerials"
import HomeTextAbout from "@/components/home/HomeTextAbout"
import HomeTopMovies from "@/components/home/HomeTopMovies"


const HomePage = () => {
  return (
    <div>
      <HomeHero/>
      <HomeHeroCategory/>
      <HomeNewMovies/>
      <HomeSerials/>
      <HomeIndianMovies/>
      <HomeTopMovies/>
      <HomeNewParts/>
      <HomeActors/>
      <HomeTextAbout/>
      <HomeCountriesMovies/>
      
    </div>
  )
}

export default HomePage
