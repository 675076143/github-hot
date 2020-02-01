import ajax from './ajax'

export  const reqHotByLanguage = (language)=>{
    return ajax(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`)
}
