import {StyleSheet} from 'react-native';
import {
  APP_BLACK,
  APP_LIGHT2,
  APP_LIGHT3,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../constants/constants';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: APP_LIGHT2,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  prpfileContainer: {
    marginBottom: 77,
    paddingTop: 96,
  },

  profileImageContainer: {
    height: 115,
    width: 115,
    borderRadius: 115 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: APP_LIGHT3,
  },
  profileName: {
    color: PRIMARY_COLOR,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  excerciselabel: {
    color: APP_BLACK,
    fontSize: 16,
    fontWeight: '400',
  },
  excerciseDateStyle: {
    color: SECONDARY_COLOR,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  excerciseContainer: {
    flexDirection: 'row',
    paddingVertical: 30,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: APP_LIGHT2,
  },
});
