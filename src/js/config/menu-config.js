import utils from '@common/utils';


const getKeys = function (menus) {
  let keys = [];
  for (let menu of menus) {
    keys.push(menu.key);
    if (menu.children && menu.children.length) {
      keys.push(...getKeys(menu.children));
    }
  }
  return keys;
};

const isAuthPage = function (full_menus, menus, name) {
  let fullMenuKeys = getKeys(full_menus);
  if(fullMenuKeys.indexOf(name) > -1 && menus.indexOf(name) == -1) {
    return false;
  }
  return true;
};

export { getKeys, isAuthPage };
