export const toSecond = (HHMMSS: string): number => {
  const p = HHMMSS.split(":");

  let s = 0;
  let m = 1;

  while (p.length > 0) {
    const o: any = p.pop();

    s += m * parseInt(o, 10);
    m *= 60;
  }
  return s;
};

export const getParam = sname => {
  const param = location.search.substr(location.search.indexOf("?") + 1);

  let sval = "";

  const params = param.split("&");

  for (let i = 0; i < params.length; i++) {
    const temp = params[i].split("=");

    if ([temp[0]] == sname) {
      sval = temp[1];
    }
  }

  return sval;
};

//export const toHHMMSS = (sec: string): string => {
//  const secNum = parseInt(sec, 10);
//  const hour = Math.floor(secNum / 3600) % 24;
//  const minute = Math.floor(secNum / 60) % 60;
//  const second = secNum % 60;
//  return [hour, minute, second]
//    .map(v => (v < 10 ? "0" + v : v))
//    .filter((v, i) => v !== "00" || i > 0)
//    .join(":");
//};
