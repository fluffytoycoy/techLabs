export function parseUrl(url){
  let category  = ''
  if(url){
    category = url.replace(/-/g, ' ').toLowerCase();
  }
  return category;
}

export function createUrlSlug(url){
  return url.replace(/\s/g,'-');
}
