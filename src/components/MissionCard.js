import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const MissionCard = (props) => {
  const { name, description, missionid } = props;
  const dispatch = useDispatch();

  const joinMissionHandler = () => {
    dispatch(joinMission(missionid));
  };

  return (
    <tr>
      <td className="Table-Content Mission">{name}</td>
      <td className="Table-Content Description Desc-Info">{description}</td>
      <td className="Table-Content Status Btn">
        <span className="Member">NOT A MEMBER</span>
      </td>
      <td className="Table-Content Empty Btn">
        <button
          type="submit"
          className="Join"
          onClick={joinMissionHandler}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

MissionCard.defaultProps = {
  name: '',
  description: '',
  missionid: '',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  missionid: PropTypes.string,
};

export default MissionCard;
