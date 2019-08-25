export function parseUrl(url){
  let category  = ''
  if(url){
    category = url.replace('-', ' ').toLowerCase();
  }
  return category;
}

export function createUrlSlug(url){
  return url.replace(' ','-');
}
