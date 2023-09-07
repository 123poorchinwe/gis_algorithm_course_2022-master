/**
 * 地理坐标Morton编码
 */
export class GeodeticQuaternaryCode {
  /**
   *
   * @param longitude
   * @param latitude
   * @param deep
   * @returns
   */
  public encoding(longitude, latitude, deep) {
    return this.geodetic2morton(longitude, latitude, deep)
  }

  /**
   *
   */
  public decoding(code) {
    return this.morton2geodetic(code)
  }

  /**
   *
   * @param longitude
   * @param latitude
   * @param deep
   * @returns
   */
  private geodetic2morton(longitude, latitude, deep) {
    let coord = this.geodetic2mercator(longitude, latitude)
    return this.mercator2morton(coord.x, coord.y, deep)
  }

  /**
   *
   * @param code
   */
  private morton2geodetic(code) {
    let box = this.morton2mercator(code)
    let coord1 = this.mercator2geodetic(box.west, box.north)
    let coord2 = this.mercator2geodetic(box.east, box.south)
    return {
      west: coord1.longitude,
      north: coord1.latitude,
      east: coord2.longitude,
      south: coord2.latitude,
    }
  }

  /**
   *
   * @param longitude 单位度
   * @param latitude 单位度
   */
  private geodetic2mercator(longitude, latitude) {
    longitude = (longitude * Math.PI) / 180.0
    latitude = (latitude * Math.PI) / 180.0

    let x = longitude
    let y = Math.log((1.0 + Math.sin(latitude)) / Math.cos(latitude))
    //let y = Math.log(Math.tan(Math.PI * 0.25 + latitude * 0.5));
    return { x: x, y: y }
  }

  /**
   *
   * @param x
   * @param y
   */
  private mercator2geodetic(x, y) {
    let longitude = x
    let latitude = 2.0 * Math.atan(Math.pow(Math.E, y)) - 0.5 * Math.PI

    longitude = (longitude * 180.0) / Math.PI
    latitude = (latitude * 180.0) / Math.PI
    return { longitude: longitude, latitude: latitude }
  }

  /**
   *
   * @param x
   * @param y
   * @param deep
   * @returns
   */
  private mercator2morton(x, y, deep) {
    let code = 't'
    let tempx = x
    let tempy = y
    let pi_2 = Math.PI * 0.5

    // q(2) | r(3)
    //-------------
    // t(0) | s(1)
    for (let i = 1; i <= deep; i++) {
      if (tempy > 0) {
        if (tempx <= 0) {
          code += 'q'
          tempx += pi_2
          tempy -= pi_2
        } else {
          code += 'r'
          tempx -= pi_2
          tempy -= pi_2
        }
      } else {
        if (tempx > 0) {
          code += 's'
          tempx -= pi_2
          tempy += pi_2
        } else {
          code += 't'
          tempx += pi_2
          tempy += pi_2
        }
      }

      tempx *= 2.0
      tempy *= 2.0
    }
    return code
  }

  /**
   *
   * @param code
   */
  private morton2mercator(code) {
    let west = -Math.PI
    let north = Math.PI * 3.0
    let east = Math.PI * 3.0
    let south = -Math.PI

    let centerx, centery

    code = code.toLowerCase()
    for (let i = 0; i < code.length; i++) {
      centerx = (west + east) * 0.5
      centery = (north + south) * 0.5

      // q(2) | r(3)
      //-------------
      // t(0) | s(1)
      switch (code[i]) {
        case 'q':
          east = centerx
          south = centery
          break
        case 'r':
          west = centerx
          south = centery
          break
        case 's':
          west = centerx
          north = centery
          break
        case 't':
          east = centerx
          north = centery
          break
      }
    }

    return {
      west: west,
      north: north,
      east: east,
      south: south,
    }
  }
}
